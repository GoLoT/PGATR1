import re
import sys


def main(inFilePath, outFilePath):
    vertexRegex = "v\s((-?\d+.\d+\s?){3})((-?\d+.\d+\s?){3})"
    vertexNormalRegex = "vn\s((-?\d+.\d+\s?){3})"
    facesRegex = "f\s((\d+\/\/\d+\s?){3})"

    inFile = open(inFilePath, mode='r')
    inTxt = inFile.read()
    pattern = re.compile(vertexRegex)
    vertexs = []
    colors = []
    normals = []
    faces = []

    for m in re.finditer(pattern, inTxt):
        vertex = m.group(1)
        color = m.group(3)
        vertex = vertex.strip()
        color = color.strip()
        vlist = vertex.split(" ")
        vertexs += vlist
        vColor = color.split(" ")
        colors += vColor

    pattern = re.compile(vertexNormalRegex)

    for m in re.finditer(pattern, inTxt):
        normal = m.group(1)
        normal = normal.strip()
        normals += normal.split(" ")

    pattern = re.compile(facesRegex)

    for m in re.finditer(pattern, inTxt):
        face = m.group(1)
        face = face.strip()
        faces += face.replace("//", " ").split(" ")[::2]

    vertexs = list(map(float, vertexs))
    colors = list(map(float, colors))
    normals = list(map(float, normals))
    faces = list(map(int, faces))
    faces = [x - 1 for x in faces]
    outFile = open(outFilePath, mode='w')
    outFile.write("{\n")
    outFile.write("\"vertexs\" : " + vertexs.__str__() + " ,\n")
    outFile.write("\"normals\" : " + normals.__str__() + " ,\n")
    outFile.write("\"color\" : " + colors.__str__() + " ,\n")
    outFile.write("\"faces\" : " + faces.__str__() + "\n")
    outFile.write("}")


main(sys.argv[1], sys.argv[2])
