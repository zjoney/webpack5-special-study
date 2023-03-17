var compiler = require("./src/index")
var str = `
    let a=1
    let b=1
`;

var newStr = compiler.compiler(str);
console.log(newStr)