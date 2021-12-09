fs = require('fs')

function mostCommonBit(array, bit=0){
    var avg = 0

    array.forEach(element => {
        avg += parseInt([...element][bit])
    })

    avg = (avg/array.length >= 0.5) ? 1 : 0

    return avg
}

function mostRareBit(array, bit=0){
    var avg = 0

    array.forEach(element => {
        avg += parseInt([...element][bit])
    })

    avg = (avg/array.length < 0.5) ? 1 : 0
    return avg
}

var input = fs.readFileSync('input.txt').toString()

input = input.split("\n")

var oxypossible = input.filter(elem => elem[0] == mostCommonBit(input))
var co2possible = input.filter(elem => elem[0] == mostRareBit(input))

var tempco2, tempoxy
for (let index = 1; index < input[0].length; index++) {
    tempco2 = co2possible
    tempoxy = oxypossible
    oxypossible = oxypossible.filter(elem => elem[index] == mostCommonBit(oxypossible, index))
    co2possible = co2possible.filter(elem => elem[index] == mostRareBit(co2possible, index))
    if(co2possible.length == 0){
        co2possible = tempco2
    }
    if(oxypossible.length == 0){
        oxypossible = tempoxy
    }
}
var co2 = parseInt(co2possible.join(''), 2)
var oxy = parseInt(oxypossible.join(''), 2)

console.log(co2)
console.log(oxy)
console.log(oxy*co2)