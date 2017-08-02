
// booleand
let a:boolean = true

//number
let i:number = 1
let hex:number = 0xf00d
let binary:number = 0b1010


//string
let firtsName:string = 'Evgen'
let age:number = 30

let result:string = `My name is ${ firtsName } and I ${ age + 1 } years old`

console.log(result)

//arays

let list1:number[] = [1,2,3]
let list2:Array<number> = list1

//tuple

let tuple1:[string, number] = ['1', 2]
tuple1[2] = '2'
tuple1[3] = 3

//enums

enum Color {Red=2, Blue, Green}

let color1 = Color.Red
let colorName:string = Color[2]

//any

let notSure:any = 2
notSure = false;
notSure  = {}
notSure = function(d:number):void {}

try {
    notSure.ifExists()
} catch (err) {
    console.log(err)
}

let listAny:any = [1, 'One', Color.Blue, function() {}]

//void

function debug(a: string):void {
    console.log(a)
}

let unusuble:void = null
unusuble = undefined

//never
function throwError(a:string):never {
    throw a;
}

function foreverCycle():never {
    while(true) {}
}

//assertions

let shouldBeDigit:any = 'Hello world'
try {
    let digit:number = shouldBeDigit as number
    let digit2:number = <number>shouldBeDigit
} catch(err) {
    console.log(err)
}