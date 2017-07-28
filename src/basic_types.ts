
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
