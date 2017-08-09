
class Calculations {

    static execute(d:{a:number, b:number}, strategy:(x:number, y:number) => number):number {
        return strategy.call(this, d.a, d.b)
    }
}

let digitPair = {a:4, b:2}
let sum1:number = Calculations.execute(digitPair, (a,b) => a + b)
let substraction1:number = Calculations.execute(digitPair, (a,b) => a - b)

console.log('sum1 ', sum1)
console.log('substraction1 ', substraction1)


//rest parameters

function sum(...digits:number[]):number {
    return digits.reduce((x, y) => x + y)
}

let sumOfArray1:number = sum(1, 2, 3)
let sumOfArray2:number = sum(5, 0, -2)
console.log('sumOfArray1 ~ ', sumOfArray1)
console.log('sumOfArray2 ~ ', sumOfArray2)
//this

interface Generator {
    digits:number[];
    createRandomGeneratorOne(): () => number;
    createRandomGeneratorTwo(): () => number;
    createRandomGeneratorThree(this:Generator): () => number;
}

let randomDigitGenrator:Generator = {
    digits: [1, 2, 3, 4],
    createRandomGeneratorOne : function() {
        return function() {
            let randomPosition:number = Math.floor(Math.random() * this.digits.length)
            return this.digits[randomPosition];
        }
    },
    createRandomGeneratorTwo : function() {
        return () => {
            let randomPosition:number = Math.floor(Math.random() * this.digits.length)
            return this.digits[randomPosition];
        }
    },

    createRandomGeneratorThree : function(this:Generator) {
        return () => {
            let randomPosition:number = Math.floor(Math.random() * this.digits.length)
            return this.digits[randomPosition];
        }
    },
}

let randomGenOne = randomDigitGenrator.createRandomGeneratorOne();
let randomGenTwo = randomDigitGenrator.createRandomGeneratorTwo();
let randomGenThree = randomDigitGenrator.createRandomGeneratorThree();

let d1:number;
let d2:number;
let d3:number;

//1
try {
    d1 = randomGenOne();
} catch(err) {
    console.log(err)
}
//2

try {
    d2 = randomGenTwo();
} catch(err) {
    console.log(err)
}

d3 = randomGenThree();

console.log('d1 ~ ', d1)
console.log('d2 ~ ', d2)
console.log('d3 ~ ', d3)
