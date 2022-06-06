//

// class Book {
//     constructor(paramTitle, paramYear, paramPage){
//         this.title = paramTitle
//         this.Year = paramYear
//         this.Page = paramPage
//     }
// }

// const bookOne = newBook('Moby')

// INHERITANCE

// Reuse properties and methods od an existing class. Children class inherit from parent class.
// use for code reusability
// Class
// Constructor
// Extend
// Super
// Static

class Animal {
    static numberOfAnimal = 1

    constructor(propCute, propName) {
        this.animalCute = propCute
        this.animalName = propName

        Animal.numberOfAnimal += 1
    }

    isSleeping() {
        return `Zzzzzz yes it is`
    }

    isEating(){
        console.log('Nom Nom Nom')
    }
}

class Fish extends Animal {// extend extends new class from first class
    constructor(animalCute, animalName, propSkinType ) {
    super(animalCute, animalName,)// Super pulls constructor properties from the first class

    this.propSkinType = propSkinType
    }

    isSwimming() {
        return `swim swim in the ocean`
    }
}

const dog = new Animal("yes", "cliff")
const cat = new Animal("Yes", "Coco the Cat")
//console.log(cat.isSleeping())
//console.log(cat.isEating())
//console.log(cat.isSwimming)
console.log(Animal.numberOfAnimal)

const fish = new Fish("Yes", "Wanda", "Scale")
//console.log(fish)