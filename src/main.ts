
function factorial(n:number):number {
    return n <= 1 ? n * factorial(n - 1) : 1;
}

var res:number = factorial(5);

//import {square} from "./basic_types";

//console.log(square(10))

interface Operation {
	invoke(a:number, b:number):number;
}

export class Container {

	doOperation(a:number, b:number, operation:Operation):number {
		return operation.invoke(a, b)
	}
}

class Sum implements Operation {
	
	invoke(a:number, b:number):number {
		return a + b;
	}
}

class Division implements Operation {

	invoke(a:number, b:number):number {
		return a / b;
	}
}

let c = new Container()
let operations:Operation[] = [new Sum(), new Division()]

let sum:number = c.doOperation(1, 2, operations[0])
console.log(sum)

let div:number = c.doOperation(6, 2, operations[1])
console.log(div);

class Node<T> {

	value: T;

	constructor(value:T) {
		this.value = value;
	}
}

let n:Node<Function> = new Node<Function>(function() {})

export class LInkedList {


}
