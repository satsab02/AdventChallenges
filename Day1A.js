/*
Define function that identifies number in a given string
*/
function getnumbers(sequence){
    const numeric_numbers = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven:7,
        eight: 8,
        nine: 9
    };
    const pattern = /\d/g;
    const getDigits = sequence.match(pattern)
    if (getDigits){
        const result_num = getDigits.map(match => numeric_numbers[match.toLowerCase()] || match);
        return result_num;
    }else{
        return []
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
const { get } = require('http');

// Read the content of the text file
const fileContent = fs.readFileSync('lines.txt', 'utf-8');

// Split the content into an array of sequences (assuming each sequence is on a separate line)
const alphanumericSequences = fileContent.split('\n').map(sequence => sequence.trim());

/*result = getSum(alphanumericSequences);
console.log(result);*/

testA = "ab4ty6i8ll9" //number = 21
num_A= getnumbers(testA);
console.log(num_A);
reqA = buildNumber(num_A);
console.log(reqA);
