
//destructuring
let a1:number[] = [1,2];
let [first, second] = a1;

console.log(first, ' ', second);

[first, second] = [second, first];

function f([first, second]: [number, boolean]):void {
	console.log(first)
	console.log(second)
}

f([1, true]);

let [a2, ...rest] = [1,2,3,4];
console.log(a2, ' ', rest)

let [, a3, a4] = [1,2,3,4];
console.log(a3, ' ', a4);

let obj1 = {
	a5: 1,
	a6: 12,
	a7: 'bar'
}

let {a5, a6} = obj1;

({a5, a6} = {a5: 1, a6: 10})

 let {a7, ...last} = obj1;
 console.log('last ', last)

 //renaiming
 let {a5: newName1, a6:newName2} = obj1;

 //default
 function keepWholeObj(wholeObj: {a:string, b?:number}):void {
 	let {a,b = 1000} = wholeObj;
 }

//function decalaration

type C = {a:string, b?:number}
function f3({a,b}:C):void {
	//
}

function f4({a,b = 2} = {a:0, b:1}):void {
	//
}

f4();
f4({a:2, b:3});

//spread
let a8:number[] = [1, 2]
let a9:number[] = [3, 4]
let a10:number[] = [0, ...a8, ...a9, 5]
console.log(a10)

let defaults = {a: 1, b:2 , c:3}
let res1 = {a: 2, ...defaults}
let res2 = {...defaults, a: 2}
console.log('res1 -> ', res1)
console.log('res2 -> ', res2)