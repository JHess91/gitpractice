const prompt = require('prompt-sync')({ sigint: true })


const switchLabel = {
    '0': 'No',
    '1': 'Yes'
}
console.log(`Do you want to continue? ${switchLabel['1']} or ${switchLabel['0']}`)
const prompt1 = prompt('Your answer')

console.log(prompt1)

let answer1

if (prompt1 == 'Yes') {
     answer1 = switchLabel['1']
} else if (prompt1 == 'No'){
     answer1 = switchLabel['0']
}

console.log(`Your answer is ${answer1}`)