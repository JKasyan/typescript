
class Calculations {

    static execute(d:{a:number, b:number}, strategy:(x:number, y:number) => number):number {
        return strategy.apply(d.a, d.b)
    }
}

let digitPair = {a:4, b:2}
let sum1:number = Calculations.execute(digitPair, (a,b) => a + b)
let substraction1:number = Calculations.execute(digitPair, (a,b) => a - b)

console.log('sum1 ', sum1)
console.log('substraction1 ', substraction1)
