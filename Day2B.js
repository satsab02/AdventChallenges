//setting cube limit per colour
const redCubes = 12;
const greenCubes = 13;
const blueCubes = 14;


function gamePower(game){
    //define arrays to store required values
    
    redCubesCount = []
    greenCubesCount = []
    blueCubesCount = []
    gamePossible = true


    cleanedInput = game.split(" ")
    //creates arrays that stores the number of red, blue and green cubes 
    for (i = 3; i < cleanedInput.length; i++) {
        if (cleanedInput[i].match(/^red/g)){
            redCubesCount.push(Number(cleanedInput[i-1]))
        }else if (cleanedInput[i].match(/^blue/g)){
            blueCubesCount.push(Number(cleanedInput[i-1]))
        }else if (cleanedInput[i].match(/^green/g)){
            greenCubesCount.push(Number(cleanedInput[i-1]))
        }
        
    }
    let minRed = 0;
    let minBlue = 0;
    let minGreen = 0;

    for (j= 0; j< redCubesCount.length; j++){
        if (redCubesCount[j]> minRed){
            minRed = redCubesCount[j]
        }
    }
    for (j= 0; j< blueCubesCount.length; j++){
        if (blueCubesCount[j]> minBlue){
            minBlue = blueCubesCount[j]
        }
    }
    for (j= 0; j< greenCubesCount.length; j++){
        if (greenCubesCount[j]> minGreen){
            minGreen = greenCubesCount[j]
        }
    }
    powerCube = minRed*minBlue*minGreen
    return powerCube
};

//let x = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
//console.log(gamePower(x));

const fs = require('fs');
const { get } = require('http');

// Read the content of the text file
const fileContent = fs.readFileSync('inputDay2.txt', 'utf-8');

// Split the content into an array of sequences (assuming each sequence is on a separate line)
const games = fileContent.split('\n').map(sequence => sequence.trim());
var answer = 0
for (game = 0; game< games.length; game ++){
    
    power = gamePower(games[game])
    answer += power
    
}

console.log(answer)