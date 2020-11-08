import './css/common.css';  


console.log('Это index.js');
const a = 2;
console.log(a);

class Hero {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
const b = new Hero('Jason');
