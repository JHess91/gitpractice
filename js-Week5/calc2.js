const prompt = require('prompt-sync')({ sigint: true })

console.log('Welcome to Node CLI Calculator App')
console.log('')
console.log('Please read the acceptance criteria to get started.')
console.log('')


const name = prompt('What is your name? ')
console.log(`Hey there ${name}`)

function calculator(){

const operation = prompt(`Please choose an operation: + , - , * , / `)

let first = prompt(`Enter your first number `)
let second = prompt(`Enter your second number `)

const x = Number(first)
const y = Number(second)

switch (operation) {
  case '+':
    console.log(x + y)
    break
  case '-':
    console.log(x - y)
    break
  case '*':
    console.log(x * y)
    break
  case '/':
    console.log(x / y)
    break
}
}

calculator(console.log())

let tryAgain = true

while(tryAgain === true){
    console.log('Would you like to run Calculator again? (Yes/No) ')
    const tryAgain = ('Yes/No')

    if( tryAgain = 'Yes'){
      console.log(calculator)
    } else ()

}