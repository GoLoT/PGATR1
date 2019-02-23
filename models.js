//Triangle
var triVertices = [ -0.5, -0.5, 0.0,    1,0,0,  
                    0.5, -0.5, 0.0,     0,1,0,
                    0.0,  0.5, 0.0,     0,0,1, ];
var triFaces = [ 0, 1, 2];

//Cube
var cubeVertices = [ -1,-1,-1,     1,1,0,
                    1,-1,-1,     1,1,0,
                    1, 1,-1,     1,1,0,
                    -1, 1,-1,     1,1,0,

                    -1,-1, 1,     0,0,1,
                    1,-1, 1,     0,0,1,
                    1, 1, 1,     0,0,1,
                    -1, 1, 1,     0,0,1,

                    -1,-1,-1,     0,1,1,
                    -1, 1,-1,     0,1,1,
                    -1, 1, 1,     0,1,1,
                    -1,-1, 1,     0,1,1,

                    1,-1,-1,     1,0,0,
                    1, 1,-1,     1,0,0,
                    1, 1, 1,     1,0,0,
                    1,-1, 1,     1,0,0,

                    -1,-1,-1,     1,0,1,
                    -1,-1, 1,     1,0,1,
                    1,-1, 1,     1,0,1,
                    1,-1,-1,     1,0,1,

                    -1, 1,-1,     0,1,0,
                    -1, 1, 1,     0,1,0,
                    1, 1, 1,     0,1,0,
                    1, 1,-1,     0,1,0];

var cubeFaces = [ 0,1,2,
                0,2,3,

                4,5,6,
                4,6,7,

                8,9,10,
                8,10,11,

                12,13,14,
                12,14,15,

                16,17,18,
                16,18,19,

                20,21,22,
                20,22,23 ];
var cubeTriangle = [
    //Cara z = 1
    0,1,2,			1,3,2,
    //Cara z = -1
    4,6,5,			5,6,7,
    //Cara x = 1
    8,10,9,			9,10,11,
    //Cara x = -1
    12,13,14,		13,15,14,
    //Cara y = 1
    16,17,18,		17,19,18,
    //Cara y = -1
    20,22,21,		21,22,23,
];

//Normal de los vertices
var cubeVertexNormal = [
    //Cara z = 1
    0.0,	0.0,	 1.0,
    0.0,	0.0,	 1.0,
    0.0,	0.0,	 1.0,
    0.0,	0.0,	 1.0,

    //Cara z = -1		   
    0.0,	0.0,	-1.0,
    0.0,	0.0,	-1.0,
    0.0,	0.0,	-1.0,
    0.0,	0.0,	-1.0,

    //Cara x = 1		   
    1.0,	0.0,	 0.0,
    1.0,	0.0,	 0.0,
    1.0,	0.0,	 0.0,
    1.0,	0.0,	 0.0,

    //Cara x = -1		   
    -1.0,	0.0,	 0.0,
    -1.0,	0.0,	 0.0,
    -1.0,	0.0,	 0.0,
    -1.0,	0.0,	 0.0,

    //Cara y = 1		   
    0.0,	1.0,	0.0,
    0.0,	1.0,	0.0,
    0.0,	1.0,	0.0,
    0.0,	1.0,	0.0,

    //Cara y = -1		   
    0.0,	-1.0,	0.0,
    0.0,	-1.0,	0.0,
    0.0,	-1.0,	0.0,
    0.0,	-1.0,	0.0
];

//Posicíon de los vertices
var cubeVertexPos = [
        //Cara z = 1
    -1.0,	-1.0,	 1.0,   0.0,	0.0,	 1.0,  //0
    1.0,	-1.0,	 1.0,   0.0,	0.0,	 1.0,  //1
    -1.0,	 1.0,	 1.0,   0.0,	0.0,	 1.0,  //2
    1.0,	 1.0,	 1.0,   0.0,	0.0,	 1.0,  //3

    //Cara z = -1		   
    -1.0,	-1.0,	-1.0,   0.6,	0.6,	 1.0, //4
    1.0,	-1.0,	-1.0,   0.6,	0.6,	 1.0, //5
    -1.0,	 1.0,	-1.0,   0.6,	0.6,	 1.0, //6
    1.0,	 1.0,	-1.0,   0.6,	0.6,	 1.0, //7

    //Cara x = 1		   
    1.0,	-1.0,	-1.0,   1.0,	0.0,	 0.0, //8
    1.0,	-1.0,	 1.0,   1.0,	0.0,	 0.0, //9
    1.0,	 1.0,	-1.0,   1.0,	0.0,	 0.0, //10
    1.0,	 1.0,	 1.0,   1.0,	0.0,	 0.0, //11

    //Cara x = -1		   
    -1.0,	-1.0,	-1.0,   1.0,	0.6,	 0.6,//12
    -1.0,	-1.0,	 1.0,   1.0,	0.6,	 0.6,//13
    -1.0,	 1.0,	-1.0,   1.0,	0.6,	 0.6,//14
    -1.0,	 1.0,	 1.0,   1.0,	0.6,	 0.6,//15

    //Cara y = 1		   
    -1.0,	 1.0,	-1.0,    0.0,	1.0,	0.0, //16
    -1.0,	 1.0,	 1.0,    0.0,	1.0,	0.0, //17
    1.0,	 1.0,	-1.0,    0.0,	1.0,	0.0, //18
    1.0,	 1.0,	 1.0,    0.0,	1.0,	0.0, //19

    //Cara y = -1		   
    -1.0,	-1.0,	-1.0,    0.6,	1.0,	0.6,//20
    -1.0,	-1.0,	 1.0,    0.6,	1.0,	0.6,//21
    1.0,	-1.0,	-1.0,    0.6,	1.0,	0.6,//22
    1.0,	-1.0,	 1.0,    0.6,	1.0,	0.6,//23
];