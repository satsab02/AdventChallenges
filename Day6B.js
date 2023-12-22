const fs = require("fs");
const path = require("path");
const games = fs.readFileSync(path.resolve(__dirname, "inputDay6.txt"), "utf8").trim().split("\n");

let times = games[0].split(":")[1].trim().split(" ").filter(element => element !== '');
console.log(times);
let distances = games[1].split(":")[1].trim().split(" ").filter(element => element !== '');
console.log(distances);

time_big = [+times.join("")];
console.log(time_big);
distance_big = [+distances.join("")];
console.log(distance_big);
let answer = 1
for (i = 0, acceleration = 0; i<time_big.length; i++, acceleration = 0){
    for(j = time_big[i], k = 0; k< time_big[i]; k++){
        if((time_big[i]-k)*k>distance_big[i])acceleration ++

    }
    answer *= acceleration
}
console.log(answer)
