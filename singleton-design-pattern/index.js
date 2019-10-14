// ? Singleton: A Singleton is an object which can only be instantiated one time....

const chalk = require('chalk')

let instance = null;

class Car {
    constructor(name, model, color, doors) {
        if(!instance) {
            this.name = name;
            this.model = model;
            this.color = color;
            this.doors = doors;
            instance = this;
        } else {
            return instance;
        }
    }
}


const toyota = new Car('toyota', 'camry', 'blue', 2);
const tesla = new Car('tesla', 'model 3', 'black', 4);

console.log(chalk.bold.red(JSON.stringify(toyota)));
console.log(chalk.bold.red(JSON.stringify(tesla)));
