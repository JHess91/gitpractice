const prompt = require('prompt-sync')({ sigint: true })

console.log(`So I hear you want to math`)
console.log("")
console.log(`Lets do it!`)
console.log("")
console.clear()

const userName = prompt(`First off, what is your name? `)
console.clear()
console.log("")
console.log(`Well hello ${userName}! It's nice to meet you!`)
console.log("")

let runAgain = true

while(runAgain == true) {
    console.log(`Now how would you like to math?`)
    const operation = prompt(`Add, Subtract, Multiply, Divide`)
 
    console.log(`Great choice. Now lets pick two numbers to ${operation}`)

    let firstNum = prompt(`Enter your first number `)
    let secondNum = prompt(`Enter your second number `)

    const x = Number(firstNum)
    const y = Number(secondNum)

    switch (operation) {
        case 'Add':
          console.log(x + y)
          break
        case 'Subtract':
          console.log(x - y)
          break
        case 'Multiply':
          console.log(x * y)
          break
        case 'Divide':
          console.log(x / y)
          break
      }

      console.log(`Wanna try another one?`)
      startOver = prompt (`Yes / No `)

      if (startOver == 'Yes'){
          console.clear
      } else if (startOver == 'No') {
          console.clear()
          console.log(`Well that was fun! Let me know if you need me again. Dont forget about me.`)
          process.exit()
      }

}