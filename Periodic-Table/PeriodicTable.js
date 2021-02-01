var tableArr1 = 
    [
        [ 
            {element:"Hydrogen", class:"Nonmetal"},
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
            {element:"Helium", class:"Noble Gas"}
        ],

        [
            {element:"Lithium", class:"Alkali Metal"},
            {element:"Beryllium", class:"Alkaline Earth Metal"},
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
            {element:"Boron", class:"Metaloid"},
            {element:"Carbon", class:"Nonmetal"},
            {element:"Nitrogen", class:"Nonmetal"},
            {element:"Oxygen", class:"Nonmetal"},
            {element:"Fluorine", class:"Halogen"},
            {element:"Neon", class:"Noble Gas"}
        ],

        [
            {element:"Sodium", class:"Alkali Metal"},
            {element:"Magnesium", class:"Alkaline Earth Metal"},
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
            {element:"Aluminium", class:"Post-Transition Metal"},
            {element:"Silicon", class:"Metaloid"},
            {element:"Phosphorus", class:"Nonmetal"},
            {element:"Sulfur", class:"Nonmetal"},
            {element:"Chlorine", class:"Halogen"},
            {element:"Argon", class:"Noble Gas"}
        ],

        [
            {element:"Potassium", class:"Alkali Metal"},
            {element:"Calium", class:"Alkaline Earth Metal"},
            {element:"Scandium", class:"Transition Metal"},
            {element:"Titanium", class:"Transition Metal"},
            {element:"Vanadium", class:"Transition Metal"},
            {element:"Chromium", class:"Transition Metal"},
            {element:"Manganese", class:"Transition Metal"},
            {element:"Iron", class:"Transition Metal"},
            {element:"Cobalt", class:"Transition Metal"},
            {element:"Nickel", class:"Transition Metal"},
            {element:"Copper", class:"Transition Metal"},
            {element:"Zinc", class:"Transition Metal"},
            {element:"Gallium", class:"Post-Transition Metal"},
            {element:"Germainium", class:"Metaloid"},
            {element:"Arsenic", class:"Metaloid"},
            {element:"Selenium", class:"Nonmetal"},
            {element:"Bromine", class:"Halogen"},
            {element:"Krypton", class:"Noble Gas"}
        ],

        [
            {element:"Rubidium", class:"Alkali Metal"},
            {element:"Strontium", class:"Alkaline Earth Metal"},
            {element:"Yttrium", class:"Transition Metal"},
            {element:"Zirconium", class:"Transition Metal"},
            {element:"Niobium", class:"Transition Metal"},
            {element:"Molybdenum", class:"Transition Metal"},
            {element:"Technetium", class:"Transition Metal"},
            {element:"Ruthenium", class:"Transition Metal"},
            {element:"Rhodium", class:"Transition Metal"},
            {element:"Palladium", class:"Transition Metal"},
            {element:"Silver", class:"Transition Metal"},
            {element:"Cadmium", class:"Transition Metal"},
            {element:"Indium", class:"Metaloid"},
            {element:"Tin"},
            {element:"Antimony"},
            {element:"Tellerium"},
            {element:"Iodine"},
            {element:"Xenon"}
            
        ],

        [
            {element:"Cesium"},
            {element:"Barium"},
            {element:"Lanthanum"},
            {element:"Hafnium"},
            {element:"Tantalum"},
            {element:"Tungsten"},
            {element:"Rhenium"},
            {element:"Osmium"},
            {element:"Iridium"},
            {element:"Platinum"},
            {element:"Gold"},
            {element:"Mercury"},
            {element:"Thallium"},
            {element:"Leab"},
            {element:"Bismuth"},
            {element:"Polonium"},
            {element:"Astatine"},
            {element:"Radon"}
        ],

        [
            {element:"Francium"},
            {element:"Radium"},
            {element:"Actinium"},
            {element:"Rutherfordium"},
            {element:"Dubnium"},
            {element:"Seaborgium"},
            {element:"Bohrium"},
            {element:"Hassium"},
            {element:"Meitnerium"},
            {element:"Darmstadium"},
            {element:"Roentegium"},
            {element:"Copernicium"},
            {element:"Nihonium"},
            {element:"Flerovium"},
            {element:"Moscovium"},
            {element:"Livermorium"},
            {element:"Tennessine"},
            {element:"Oganessum"}
        ],
    ];

for(var c = 0; c < 7; c++){
    for(var r = 0; r < 18; r++){
        if(tableArr1[c][r].element !== -1){
            $('#container').append("<div class = 'element'></div>");
        }
        else{
            $('#container').append("<div class = 'empty'></div>");
        }
    }
}