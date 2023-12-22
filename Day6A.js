const fs = require("fs");
const path = require("path");
const games = fs.readFileSync(path.resolve(__dirname, "inputDay6.txt"), "utf8").trim().split("\n");

let times = games[0].split(":")[1].trim().split(" ").filter(element => element !== '');
console.log(times);
let distances = games[1].split(":")[1].trim().split(" ").filter(element => element !== '');
console.log(distances);

let answer = 1
for (i = 0, acceleration = 0; i<times.length; i++, acceleration = 0){
    for(j = times[i], k = 0; k< times[i]; k++){
        if((times[i]-k)*k>distances[i])acceleration ++

    }
    answer *= acceleration
}
console.log(answer)
