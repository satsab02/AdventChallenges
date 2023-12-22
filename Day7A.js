const fs = require("fs");
const path = require("path");
const games = fs.readFileSync(path.resolve(__dirname, "inputDay7.txt"), "utf8").trim().split("\n");
console.log(games);

//parse the input into hands and bets

let hands = [];
let bets = [];
for (i=0; i<games.length; i++){
    hands.push(games[i].split(" ")[0])
}
console.log(hands)