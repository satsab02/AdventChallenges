const fs = require("fs");
const path = require("path");
const games = fs.readFileSync(path.resolve(__dirname, "inputDay7.txt"), "utf8").split("\n").map(game => game.split(" ")).map(game => [game[0], parseInt(game[1])]);
;
//console.log(games);

//creating arrays for each type of hand

let fiveOfKind = [];
let fourOfKind = [];
let threeOfkind = [];
let fullHouse = [];
let twoPair = [];
let onePair = [];
let highCard = [];

for (const game of games){
    handMap = {}
    for (const card of game[0]){
        if (handMap[card] == undefined){
            handMap[card] =1
        }else{
            handMap[card]++
        }
    }
    cards = Object.keys(handMap)
    cardCount = Object.values(handMap)
    
    // if a hand is a five of a kind, there is only one type of card. Similarly 4 of kind/full house will only have two types of cards
    if (cards.length == 1){
        fiveOfKind.push(game)
    }else if(cards.length ==2){
        if (cardCount.includes(4)){
            fourOfKind.push(game)
        }else {
            fullHouse.push(game)
        }
    }else if(cards.length ==3){
        if (cardCount.includes(3)){
            threeOfkind.push(game)
        }else{
            twoPair.push(game)
        }
    }else if(cards.length ==4){
        onePair.push(game)
    }else {
        highCard.push(game)
    }
}

//establish a numerical mapping for each character

const numericMap = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
}
/* for each of the hand type arrays made, we will now sort them based on their value based on the mapping above
The sort function will initially compare the first character of each hand and sort them. If they are the same, it will 
look at the second, third, fourth and fifth element. it will return zero if the same hand is being compared.
*/
function sortHands(hand1, hand2){
    if (numericMap[hand1[0][0]]!=numericMap[hand2[0][0]]){
        return numericMap[hand1[0][0]] - numericMap[hand2[0][0]]
    }else if (numericMap[hand1[0][1]]!=numericMap[hand2[0][1]]){
        return numericMap[hand1[0][1]] - numericMap[hand2[0][1]]
    }else if (numericMap[hand1[0][2]]!=numericMap[hand2[0][2]]){
        return numericMap[hand1[0][2]] - numericMap[hand2[0][2]]
    }else if (numericMap[hand1[0][3]]!=numericMap[hand2[0][3]]){
        return numericMap[hand1[0][3]] - numericMap[hand2[0][3]]
    }else if (numericMap[hand1[0][4]]!=numericMap[hand2[0][4]]){
        return numericMap[hand1[0][4]] - numericMap[hand2[0][4]]
    }else return 0
}
fiveOfKind.sort(sortHands);
fourOfKind.sort(sortHands);
fullHouse.sort(sortHands);
threeOfkind.sort(sortHands);
twoPair.sort(sortHands);
onePair.sort(sortHands);
highCard.sort(sortHands);

const answerArray = [...fiveOfKind, ...fourOfKind, ...fullHouse, ...threeOfkind, ...twoPair, ...onePair, ...highCard];

let answer = 0;
for (i = 0; i<answerArray.length; i++){
    if (i < answerArray.length){
        strength= answerArray[i][1]*(answerArray.length-i)
    }else if (i = answerArray.length){
        strength = answerArray[i][1]
    }
    answer += strength
}
console.log(answer)