fs = require('fs')

var input = fs.readFileSync('input.txt').toString()

input = input.split("\n")

var gamma = []

for (var i = 0; i < 12; i++) {
    gamma[i] = 0
}

input.forEach((element) => {
    [...element].forEach((elem, index) =>{
        gamma[index] += parseInt(elem)
})
})

gamma.forEach((element, index) => {
    if(input.length/2 >= element){
        gamma[index] = 1
    }else{
        gamma[index] = 0
    }
})

var epsi = gamma
gamma = parseInt(gamma.join(''), 2)

epsi.forEach((element, index) => {
    if(element == 1){
        epsi[index] = 0
    }else{
        epsi[index] = 1
    }
})

epsi = parseInt(epsi.join(''), 2)

console.log(gamma)
console.log(epsi)
console.log(epsi * gamma)