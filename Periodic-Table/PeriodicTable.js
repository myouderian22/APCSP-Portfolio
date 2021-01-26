var tableArr1 = 
    [
        [ 
            {element:"Hydrogen"},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:"Helium"}
        ],

        [
            {element:"Lithium"},
            {element:"Beryllium"},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:-1},
            {element:"Boron"},
            {element:"Carbon"},
            {element:"Nitrogen"},
            {element:"Oxygen"},
            {element:"Fluorine"},
            {element:"Neon"}
        ],
 //   [1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
 //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
 //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
 //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
 //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];

for(var c = 0; c < 7; c++){
    for(var r = 0; r < 18; r++){
        if(tableArr1[c][r].element !== -1){
            $('#container').append("<div class = 'element'></div>")
        }
        else{
            $('#container').append("<div class = 'empty'></div>")
        }
    }
}