const chalk = require('chalk')

class Car {
    constructor(name, model, color, doors) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.doors = doors;
    }
}

const toyota = new Car('toyota', 'camry', 'blue', 4);
const tesla = new Car('tesla', 'model 3', 'balck', 4);

console.log(chalk.bold.red(JSON.stringify(toyota)));
console.log(chalk.bold.red(JSON.stringify(tesla)));
