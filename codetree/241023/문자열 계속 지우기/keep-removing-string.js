const fs = require("fs");
let [input, search] = fs.readFileSync(0).toString().trim().split("\n");

while (input.indexOf(search) >= 0) {
    const idx = input.indexOf(search)
    input = input.slice(0, idx) + input.slice(idx+search.length);
}

console.log(input)