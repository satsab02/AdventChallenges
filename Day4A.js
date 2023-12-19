var answer = 0
const fs = require("fs");
const path = require("path");
const games = fs.readFileSync(path.resolve(__dirname, "inputDay4.txt"), "utf8").split("\n");

function scoreCard(games){
    //clean the input two get two arrays for each game: one with the winning numbers and the other with my numbers
    for (game = 0; game<games.length; game ++){
        cleanGame = games[game].trim().split("|")
        winningNums = cleanGame[0].trim().split(":")[1].split(" ").filter(element => element !== '')
        myNums = cleanGame[1].trim().split(" ").filter(element => element !== '')
    
        //we will now commence the comparison and scoring
        let score = 0
        let match = 0
        for (i = 0; i<winningNums.length; i++){
            for(j = 0; j<myNums.length; j++){
                if (winningNums[i]==myNums[j]){
                    match ++
                    if(match == 1){
                        score ++
                    }else{
                        score = score*2
                    }
                    break
                }
            }
        }
        answer += score
        }
    return answer
};
console.log(scoreCard(games));


