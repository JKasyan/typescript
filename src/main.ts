
function factorial(n:number):number {
    return n <= 1 ? n * factorial(n - 1) : 1;
}

var res:number = factorial(5);

//import {square} from "./basic_types";

//console.log(square(10))
