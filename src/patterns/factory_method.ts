
import {Operation, Substract, Sum} from './strategy';
import {Pair, Calc} from './strategy';

class Divide implements Operation {

    public invoke(p:Pair):number {
        return p.a / p.b;
    }
}

class Multiplication implements Operation {

    public invoke(p:Pair):number {
        return p.a * p.b;
    }
}

enum OpeartionType {
    Divide, Multiplication, Sum, Substract
}

class OpeartionFactory {

    private constructor() {}

    public static getInstance(type:OpeartionType):Operation {
        switch(type) {
            case OpeartionType.Divide:
                return new Divide;
            case OpeartionType.Multiplication:
                return new Multiplication;
            case OpeartionType.Sum:
                return new Sum
            default:
            return new Substract
        }
    }
}

let operationDivide:Operation = OpeartionFactory.getInstance(OpeartionType.Divide)
let operationMultiplication:Operation =
    OpeartionFactory.getInstance(OpeartionType.Multiplication)
let operationSum:Operation = OpeartionFactory.getInstance(OpeartionType.Sum)
let operationSubstract:Operation = OpeartionFactory.getInstance(OpeartionType.Substract)

let divideResult:number = Calc.calculate({a:10, b:2}, operationDivide)
let multiplicationResult:number = Calc.calculate({a:10, b:2}, operationMultiplication)
let sumResult:number = Calc.calculate({a:10, b:2}, operationSum)
let substractResult:number = Calc.calculate({a:10, b:2}, operationSubstract)

console.log('divideResult ', divideResult)
console.log('multiplicationResult ', multiplicationResult)
console.log('sumResult ', sumResult)
console.log('substractResult ', substractResult)
