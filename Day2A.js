//setting cube limit per colour
const redCubes = 12;
const greenCubes = 13;
const blueCubes = 14;


function gameValid(game){
    //define arrays to store required values
    var gameID
    gamePossible = true


    cleanedInput = game.split(" ")
    //creates arrays that stores the number of red, blue and green cubes 
    for (i = 3; i < cleanedInput.length; i++) {
        if (cleanedInput[i].match(/^red/g)){
            if (Number(cleanedInput[i-1])> redCubes){
                gamePossible = false
                break
            }
        }else if (cleanedInput[i].match(/^blue/g)){
            if (Number(cleanedInput[i-1])> blueCubes){
                gamePossible = false
                break
            }
        }else if (cleanedInput[i].match(/^green/g)){
            if (Number(cleanedInput[i-1])> greenCubes){
                gamePossible = false
                break
            }
        }
        
    }
    if (gamePossible == true){
        gameID = Number((cleanedInput[1].split(':'))[0])
    }
    return gameID    
};

//let x = "Game 4: 8 green, 16 red, 7 blue; 1 red, 7 blue, 12 green; 8 green, 14 red, 1 blue; 6 blue, 9 green, 12 red; 9 red, 2 green; 8 red, 7 blue, 17 green";
//console.log(gameValid(x));

const fs = require('fs');
const { get } = require('http');

// Read the content of the text file
const fileContent = fs.readFileSync('inputDay2.txt', 'utf-8');

// Split the content into an array of sequences (assuming each sequence is on a separate line)
const games = fileContent.split('\n').map(sequence => sequence.trim());
var answer = 0
for (game = 0; game< games.length; game ++){
    validGames = []
    isValid = gameValid(games[game])
    if (isValid){
        validGames.push(isValid)
    }
    
    for (a = 0; a < validGames.length; a++){
        answer += validGames[a]
    }
}
console.log(answer)