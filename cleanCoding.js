//                              *****Clean Coding*****
//* KISS (Keep It Super Simple) aka write the code as simple and neatly as possible
//* YAGNI ( You Arent Gonna Need It)
//* Readability (make your code readable and understandable. i.e. userHasFormAccess over canAccess)
//* Meaningful Names (aviod ambiguity meaningful distinctions Pronounceable consistent)
//* Pronounceability ( Ues easily pronounceable names for variables)
//* INTENT (USE THE NAME TO SHOW INTENT) I.E elapsedTimeInDay is better than d
//* Dont be cute ( dont innovate when you can be simple) .delete() is better than .letItGo()
//* Be consistent (Stick with your choices) Dont use get in one class and fetch in another
//* SCREAMING_SNAKE_CASE
//* Functions (Keep them small, Do one thing, No side effects)
//* Pass a few arguments as possible ( aviod passing Booleans(do you need to pass a boolean? Are you doing more than one thing in the function?)) dont pass booleans in functions
//* Functions should... (Do something or return something but not both)
//* Use exceotions (Prefer to throw exceptions to handle errors) Use catch in code to handle throw from function
//* Dont return null (Try to not return a null in fuctions always have a value return. nulls could cause bugs)
//* Separate concerns vertically (Realated code should appear vertically dense. Delcare variables close to their usage. Dependent functions should be close. Similar functions should be close. Place functions in the downward direction) Use white soaces associate related things and disassociate weakly related
//* Horizontal spacing for clear coding (Keep lines short if(this). Dont use horizontal alignment. Indent function and all blocks of code consistently. Dont break indentation)
//* Express purpose (Try to convet the purpose of the code within the code) Think of coding as a story
//* Separation on concerns (Separate concepts or tasks should be separated in code) Each function has a single purpose
//* Formatting ( avoid long flies Critical stuff first; details later. Avoid long lines (80-12- col) Be concise and your code will be more readable) be consistent with the rules of your team
//* Magic numbers (do not use values with no clear meaning)
//* Avoid deep nesting (Deeply nested loops or if statements can be difficult to read)
//* DRY (Every piece of code must have a single, unambiguous, authoritative representation) DONT REPEAT YOURSELF
//* Comments (Dont comment, rewrite) commented lines should never reach final project.
//* Boy Scout Rule (Leave the code cleaner than you found it)
//* Rigidity ( the software is difficcult to change. A small change causes a cascade of subseqent changes) Big monolithic code bases are like this. Better to be modular
//* Fragility (The software breaks in many places due to a single change)
//* Immobility (Cannot reuse part of the code in other projects beacuse of involvef risk and high effot)
//* Needless Complexity ()
//* Opacity (The code is hard to understand keep it clear)

// **** for in -> Loop on objects **** (properties)
const person = { fname: 'Justin', lname: 'Hessler', age: 31 } // Keys returned in object loop if console.log x

for (let x in person) {
  //console.log(x)
}

const numbers = [45, 4, 9, 16, 25] // objects of arrays // Console logging x gives position // Console logging numbers[x] will give back values

for(let x in numbers){
    //console.log(numbers[x])
}

// **** for of **** Loops ONLY on arrays(Strings are Arrays) strings are actually array of characters

for(let x of numbers){
    //console.log(x)
}

const language = 'Javascript' // Returns code vertically 
for(let x of language){
    //console.log(x + ' Letters lol')
}


// **** While Loop ****
let y = 0
while (y < 10){
    y++
    console.log(y)
}


// **** Do While loop ****
let i = 0
 do {
    i++ // have to add 1 
    //console.log(i) // lists 1-10
} while(i < 10)