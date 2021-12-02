fs = require('fs')

var x = fs.readFileSync('input.txt').toString()

console.log(x)

var o = x.split("\n")

var y = o[1]

var i = 0;

o.forEach(element => {
    element = parseInt(element)
        if(y < element){
            i++
        }
        y=element
})
console.log(i)