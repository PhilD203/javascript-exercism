export const colorCode = (ResistorColor) => {

    return COLORS.indexOf(ResistorColor);

};

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];


//Solution without using buit-in js method 

export const colorCode = (ResistorColor) => {
    for (var i = 0; i < COLORS.length; i++) {
        if (ResistorColor == COLORS[i]) {
            return i
        }
    }
};


//Psuedocode 

    //  create an array of colors
     //iterate through the array
     // identify the position of each color in the array
 // return color at specific position 