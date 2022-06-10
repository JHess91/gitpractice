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
    console.log(`Now how would you like to math? `)
    console.log("")
    const operation = prompt(`Add, Subtract, Multiply, Divide `)
    console.log("")
 
    console.log(`Great choice. Now lets pick two numbers to ${operation}`)
    console.log("")

    let firstNum = prompt(`Enter your first number `)
    console.log("")
    let secondNum = prompt(`Enter your second number `)
    console.log("")

    const x = Number(firstNum)
    const y = Number(secondNum)

    switch (operation) {
        case 'Add' || '+' || 'add':
          console.log(x + y)
          break
        case 'Subtract' || '-' || 'subtract':
          console.log(x - y)
          break
        case 'Multiply' || '*' || 'multiply':
          console.log(x * y)
          break
        case 'Divide' || '/' || 'divide':
          console.log(x / y)
          break
      }

      console.log(`Wanna try another one?`)
      console.log("")
      startOver = prompt (`Yes / No `)

      if (startOver === 'Yes'){
          console.clear
      } else if (startOver === 'No') {
          console.clear()
          console.log(`Well that was fun! Let me know if you need me again. Dont forget about me.`)
          process.exit()
      }

}