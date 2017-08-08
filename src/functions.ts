
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
