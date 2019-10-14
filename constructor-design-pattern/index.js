const chalk = require('chalk')

class Car {
    constructor(name, model, color, doors) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.doors = doors;
    }
}


class Suv extends Car {
    constructor(name, model, color, doors, engin) {
        super(name, model, color, doors);
        this.engin = engin;
    }
}

const toyota = new Car('toyota', 'camry', 'blue', 4);
const tesla = new Suv('tesla', 'model 3', 'black', 4, 'V8');

console.log(chalk.bold.red(JSON.stringify(toyota)));
console.log(chalk.bold.red(JSON.stringify(tesla)));
