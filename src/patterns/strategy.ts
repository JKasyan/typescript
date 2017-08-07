
export interface Operation {
    invoke(p:Pair):number
}

export type Pair = {
    a:number, b:number
}

export class Sum implements Operation {

    public invoke(p:Pair):number {
        return p.a + p.b
    }
}

export class Substract implements Operation {

    public invoke(p:Pair):number {
        return p.a - p.b
    }
}

export class Calc {
    static calculate(p:Pair, op:Operation):number {
        return op.invoke(p)
    }
}

let pair:Pair = {a:10, b:2}

let sum:number = Calc.calculate(pair, new Sum)
let substract:number = Calc.calculate(pair, new Substract)

console.log('sum ', sum)
console.log('substract ', substract)
