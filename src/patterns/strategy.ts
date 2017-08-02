
interface Operation {
    invoke(p:Pair):number
}

type Pair = {
    a:number, b:number
}

class Sum implements Operation {

    public invoke(p:Pair):number {
        return p.a + p.b
    }
}

class Substract implements Operation {

    public invoke(p:Pair):number {
        return p.a - p.b
    }
}

class Calc {
    static calculate(p:Pair, op:Operation):number {
        return op.invoke(p)
    }
}

let pair:Pair = {a:10, b:2}

let sum:number = Calc.calculate(pair, new Sum)
let substract:number = Calc.calculate(pair, new Substract)

console.log('sum ', sum)
console.log('substract ', substract)