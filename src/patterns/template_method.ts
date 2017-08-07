

abstract class Calculation {

    public calculate(d:number):number {
        let res = this.operation1(d)
        return this.operation2(res)
    }

    abstract operation1(d:number):number;//
    abstract operation2(d:number):number;//
}

class AddFiveAndDivideOnTwo extends Calculation {

    operation1(d:number):number {
        return d + 5;
    }

    operation2(d:number):number {
        return d  / 2;
    }
}

class Minus1AndMultipleTwo extends Calculation {
    operation1(d:number):number {
        return d - 1;
    }

    operation2(d:number):number {
        return d  * 2;
    }
}

let calc1:Calculation = new AddFiveAndDivideOnTwo();
let result1:number = calc1.calculate(3);
console.log('result1 ~ ', result1);

let calc2:Calculation = new Minus1AndMultipleTwo();
let result2:number = calc2.calculate(11);
console.log('result2 ~ ', result2);
