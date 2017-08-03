
interface Label {
    label:string
}

let l:Label = {label:'label'}

interface SquareConfig {
    color?: string;
    width?: number;
}

let config1:SquareConfig = {color: 'red'}
let config2:SquareConfig = {color: 'red', width: 100}
let config3:SquareConfig = {}


//readonly
interface Point {
    readonly x:number;
    readonly y:number;
}

let p1:Point = {x:4, y:2}
let a1:ReadonlyArray<number> = [1,2,3]
let a2:number[] = a1 as number[]
//


interface Square {
    width:number;
    height: number;
    [propName: string]: any
}


let s1:Square = {width:10, height:20}
let s2:Square = {width:10, height:20, pr:true, pr2: 'text'}

//functions

interface Search {
    (source:string, subString:string):boolean
}

let search1:Search = function(source:string, subString:string):boolean {
    return source.search(subString) > -1
}

let search2:Search = function(source:string, subString:string) {
    return source.search(subString) > -1
}

let search3:Search = (s:string, sub:string):boolean => s.search(sub) > -1

let search4:Search = (s:string, sub:string) => s.search(sub) > -1


//indexable types
interface StringArray {
    [index: number]: string
}

let arr1:StringArray = ["Typescript", "Javscript"];

interface Objectable {
    [prop: string]: number | string[],
    [pr: number]:number
}

let obj1:Objectable = {a: 1, b: ["1", "2"], 1: 1}

//
interface ClockConstructor {
    new (hour: number, minute: number)
}

interface ClockInterface {
    tick();
}


function createClock(clockConstructor: ClockConstructor, h:number, m:number):ClockInterface {
    return new clockConstructor(h, m)
}

class DigitalClock implements ClockInterface {

    constructor(h:number, m:number) {}

    public tick():void {
        console.log('beep beep')
    }
}

let clock:ClockInterface = createClock(DigitalClock, 0, 1)
clock.tick();

//Extending interfaces

type RGB = {
    r:number,
    g:number,
    b:number
}

interface Shape {
    color: RGB
}

interface Square extends Shape {
    size: number
}

let square = <Square>{}
square.color = {r:100, b:200, g:0}
square.size = 20;

console.log(square)