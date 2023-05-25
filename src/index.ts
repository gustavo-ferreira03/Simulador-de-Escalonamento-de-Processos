import fs from "fs"

const txt = fs.readFileSync("./arq1.txt").toString();
console.log(txt)