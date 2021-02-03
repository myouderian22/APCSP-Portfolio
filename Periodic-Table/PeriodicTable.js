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
            {element:"Indium", class:"Post-Transition Metal"},
            {element:"Tin", class:"Post-Transition Metal"},
            {element:"Antimony", class:"Metaloid"},
            {element:"Tellerium", class:"Metaloid"},
            {element:"Iodine", class:"Halogen"},
            {element:"Xenon", class:"Noble Gas"}
            
        ],

        [
            {element:"Cesium", class:"Alkali Metal"},
            {element:"Barium", class:"Alkaline Earth Metal"},
            {element:"Lanthanum", class:"Transition Metal"},
            {element:"Hafnium", class:"Transition Metal"},
            {element:"Tantalum", class:"Transition Metal"},
            {element:"Tungsten", class:"Transition Metal"},
            {element:"Rhenium", class:"Transition Metal"},
            {element:"Osmium", class:"Transition Metal"},
            {element:"Iridium", class:"Transition Metal"},
            {element:"Platinum", class:"Transition Metal"},
            {element:"Gold", class:"Transition Metal"},
            {element:"Mercury", class:"Transition Metal"},
            {element:"Thallium", class:"Post-Tansition Metal"},
            {element:"Lead", class:"Post-Transition Metal"},
            {element:"Bismuth", class:"Post-Transition Metal"},
            {element:"Polonium", class:"Metaloid"},
            {element:"Astatine", class:"Halogen"},
            {element:"Radon", class:"Noble Gas"}
        ],

        [
            {element:"Francium", class:"Alkali Metal"},
            {element:"Radium", class:"Alkaline Earth Metal"},
            {element:"Actinium", class:"Transition Metal"},
            {element:"Rutherfordium", class:"Transition Metal"},
            {element:"Dubnium", class:"Transition Metal"},
            {element:"Seaborgium", class:"Transition Metal"},
            {element:"Bohrium", class:"Transition Metal"},
            {element:"Hassium", class:"Transition Metal"},
            {element:"Meitnerium", class:"Transition Metal"},
            {element:"Darmstadium", class:"Transition Metal"},
            {element:"Roentegium", class:"Transition Metal"},
            {element:"Copernicium", class:"Transition Metal"},
            {element:"Nihonium", class:"Post-Transition Metal"},
            {element:"Flerovium", class:"Post-Transition Metal"},
            {element:"Moscovium", class:"Post-Transition Metal"},
            {element:"Livermorium", class:"Post-Transition Metal"},
            {element:"Tennessine", class:"Halogen"},
            {element:"Oganessum", class:"Noble Gas"}
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