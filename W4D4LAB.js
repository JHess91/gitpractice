class Car {
    constructor(propName, propColor, propYear, propType) {
        this.carName = propName
        this.carColor = propColor
        this.carYear = propYear
        this.carType = propType
    }

    carSound() {
        return  `Vroom vroom`
    }
}

const model = new Car('Nissan', 'Yellow', 1998, 'Sedan')
console.log(model)