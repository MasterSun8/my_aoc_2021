fs = require('fs')

var input = fs.readFileSync('input.txt').toString()

input = input.split("\n")

input.forEach((element,index) => {
    input[index] = element.split(" ")
})

var dep = 0
var aim = 0
var pos = 0

input.forEach(element => {
    switch(element[0]){
        case "forward":
            pos += parseInt(element[1])
            dep += parseInt(element[1]) * aim
            break
        case "down":
            aim +=  parseInt(element[1])
            break
        case "up":
            aim -=  parseInt(element[1])
            break
    }
})
console.log(dep*pos)