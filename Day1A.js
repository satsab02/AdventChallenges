/*
Define function that identifies number in a given string
*/
function getnumbers(sequence){
    
    const getDigits = sequence.match(/\d/g) 
    if (getDigits){
        const numbers = getDigits.map(String)
        return numbers
    }
};
/*
Build a number using the first and last index of an array
*/
function buildNumber(numbers){

    if (numbers.length == 1){
        req_number = numbers[0].concat(numbers[0])
    } else {
        req_number = numbers[0].concat(numbers[(numbers.length)-1])
    };
    return req_number
};
//now with helper functions built, we will build the main function
function getSum(calibrationValues){
    var sum = 0
    for (i = 0; i < calibrationValues.length; i ++){

        numbers = getnumbers(calibrationValues[i])
        req_num = Number(buildNumber(numbers))
        sum += req_num
    }
    return sum
};
const fs = require('fs');

// Read the content of the text file
const fileContent = fs.readFileSync('lines.txt', 'utf-8');

// Split the content into an array of sequences (assuming each sequence is on a separate line)
const alphanumericSequences = fileContent.split('\n').map(sequence => sequence.trim());

result = getSum(alphanumericSequences);
console.log(result);

/*testA = "12g4u7" //number = 47
num_A= getnumbers(testA);
console.log(num_A);
reqA = buildNumber(num_A);
console.log(reqA);*/
