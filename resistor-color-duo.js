export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const value = (resistors) => {

    var resistorOne = resistors[0];
    var resistorTwo = resistors[1];

    var total = COLORS.indexOf(resistorOne) + "" + COLORS.indexOf(resistorTwo);

    return parseInt(total)
};