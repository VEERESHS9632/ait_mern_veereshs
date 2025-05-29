const firstNum = 20;
const secondNum = 40;

function bigOfTwo(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;
}

const smallOfTwo = (num1, num2) => {
    if (num1 < num2)
        return num1;
    else
        return num2;
};

console.log("Biggest Number:", bigOfTwo(firstNum, secondNum)); 
console.log("Smallest Number:", smallOfTwo(firstNum, secondNum)); 