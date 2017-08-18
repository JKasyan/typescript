
function identify<T>(t:T):T {
    return t;
}

let numberIdentify:number = identify(5)
let objectIdentify:Object = identify({})
let functionIdentify:() => void = identify(console.log)

interface Lengthwise {
    length: number
}

function getLength<T extends Lengthwise>(t: T):number {
    return t.length
}

let objWithLength = {a: 1, length: 20}

let lengthFromObj:number = getLength(objWithLength);
let lengthFromString:number = getLength("generic");
let lengthFromArray:number = getLength([1,2,3]);

console.log(lengthFromObj , ' ', lengthFromString, ' ', lengthFromArray)

function getProp<O,P extends keyof O>(obj:O, prop:P):any {
    return obj[prop]
}

let propLengthOfArray:number = getProp([1,2,3], "length");
let propAOfObj:string[] = getProp({a:['a', 'b', 'c']}, 'a');


// class type in generic

function create<T>(c: {new():T;}):T {
    return new c();
}
let newArray:number[] = create(Array);


class Engine {
    name:string = 'engine'
}

class Auto extends Engine {
    maxSpeed:number = 200
}

function createInstance<T extends Engine>(e:{new():T;}) {
    return new e();
}

let newEngineName:string = createInstance(Engine).name
let newAutoMaxSpeed:number = createInstance(Auto).maxSpeed

console.log('newEngineName ~ ', newEngineName)
console.log('newAutoMaxSpeed ~ ', newAutoMaxSpeed)
