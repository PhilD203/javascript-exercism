
export const reverseString = (str) => {

    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    return joinArray;
};

// Solution with Methods chained together 

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");