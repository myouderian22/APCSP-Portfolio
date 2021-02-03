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
            {element:"Helium", class:"nobleGas"}
        ],

        [
            {element:"Lithium", class:"alkaliMetal"},
            {element:"Beryllium", class:"alkalineEarthMetal"},
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
            {element:"Neon", class:"nobleGas"}
        ],

        [
            {element:"Sodium", class:"alkaliMetal"},
            {element:"Magnesium", class:"alkalineEarthMetal"},
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
            {element:"Aluminium", class:"postTransitionMetal"},
            {element:"Silicon", class:"Metaloid"},
            {element:"Phosphorus", class:"Nonmetal"},
            {element:"Sulfur", class:"Nonmetal"},
            {element:"Chlorine", class:"Halogen"},
            {element:"Argon", class:"nobleGas"}
        ],

        [
            {element:"Potassium", class:"alkaliMetal"},
            {element:"Calium", class:"alkalineEarthMetal"},
            {element:"Scandium", class:"transitionMetal"},
            {element:"Titanium", class:"transitionMetal"},
            {element:"Vanadium", class:"transitionMetal"},
            {element:"Chromium", class:"transitionMetal"},
            {element:"Manganese", class:"transitionMetal"},
            {element:"Iron", class:"transitionMetal"},
            {element:"Cobalt", class:"transitionMetal"},
            {element:"Nickel", class:"transitionMetal"},
            {element:"Copper", class:"transitionMetal"},
            {element:"Zinc", class:"transitionMetal"},
            {element:"Gallium", class:"postTransitionMetal"},
            {element:"Germainium", class:"Metaloid"},
            {element:"Arsenic", class:"Metaloid"},
            {element:"Selenium", class:"Nonmetal"},
            {element:"Bromine", class:"Halogen"},
            {element:"Krypton", class:"nobleGas"}
        ],

        [
            {element:"Rubidium", class:"alkaliMetal"},
            {element:"Strontium", class:"alkalineEarthMetal"},
            {element:"Yttrium", class:"transitionMetal"},
            {element:"Zirconium", class:"transitionMetal"},
            {element:"Niobium", class:"transitionMetal"},
            {element:"Molybdenum", class:"transitionMetal"},
            {element:"Technetium", class:"transitionMetal"},
            {element:"Ruthenium", class:"transitionMetal"},
            {element:"Rhodium", class:"transitionMetal"},
            {element:"Palladium", class:"transitionMetal"},
            {element:"Silver", class:"transitionMetal"},
            {element:"Cadmium", class:"transitionMetal"},
            {element:"Indium", class:"postTransitionMetal"},
            {element:"Tin", class:"postTransitionMetal"},
            {element:"Antimony", class:"Metaloid"},
            {element:"Tellerium", class:"Metaloid"},
            {element:"Iodine", class:"Halogen"},
            {element:"Xenon", class:"nobleGas"}
            
        ],

        [
            {element:"Cesium", class:"alkaliMetal"},
            {element:"Barium", class:"alkalineEarthMetal"},
            {element:"Lanthanum", class:"transitionMetal"},
            {element:"Hafnium", class:"transitionMetal"},
            {element:"Tantalum", class:"transitionMetal"},
            {element:"Tungsten", class:"transitionMetal"},
            {element:"Rhenium", class:"transitionMetal"},
            {element:"Osmium", class:"transitionMetal"},
            {element:"Iridium", class:"transitionMetal"},
            {element:"Platinum", class:"transitionMetal"},
            {element:"Gold", class:"transitionMetal"},
            {element:"Mercury", class:"transitionMetal"},
            {element:"Thallium", class:"Post-Tansition Metal"},
            {element:"Lead", class:"postTransitionMetal"},
            {element:"Bismuth", class:"postTransitionMetal"},
            {element:"Polonium", class:"Metaloid"},
            {element:"Astatine", class:"Halogen"},
            {element:"Radon", class:"nobleGas"}
        ],

        [
            {element:"Francium", class:"alkaliMetal"},
            {element:"Radium", class:"alkalineEarthMetal"},
            {element:"Actinium", class:"transitionMetal"},
            {element:"Rutherfordium", class:"transitionMetal"},
            {element:"Dubnium", class:"transitionMetal"},
            {element:"Seaborgium", class:"transitionMetal"},
            {element:"Bohrium", class:"transitionMetal"},
            {element:"Hassium", class:"transitionMetal"},
            {element:"Meitnerium", class:"transitionMetal"},
            {element:"Darmstadium", class:"transitionMetal"},
            {element:"Roentegium", class:"transitionMetal"},
            {element:"Copernicium", class:"transitionMetal"},
            {element:"Nihonium", class:"postTransitionMetal"},
            {element:"Flerovium", class:"postTransitionMetal"},
            {element:"Moscovium", class:"postTransitionMetal"},
            {element:"Livermorium", class:"postTransitionMetal"},
            {element:"Tennessine", class:"Halogen"},
            {element:"Oganessum", class:"nobleGas"}
        ],
    ];



for(var c = 0; c < 7; c++){
    for(var r = 0; r < 18; r++){

        var currElement = tableArr1[c][r];
        console.log(currElement.element);

        if(currElement.element != -1){
            $('container').append("<div class = 'element' + currElement.class + '>' + currElement.element + '</div>")
        }
        else{
            $('#container').append("<div class = 'empty'></div>");
        }
    }
}