fs = require('fs')

var x = fs.readFileSync('input.txt').toString()

console.log(x)

var o = x.split("\n")

var y = o[0]+o[1]+o[2]
var i = 0
var t = 0

o.forEach((element, index) => {
        t = parseInt(element) + parseInt(o[index + 1]) + parseInt(o[index + 2])
        if(y < t){
            i++
        }
        y=t
})
console.log(i)