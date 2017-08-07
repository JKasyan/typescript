"use strcit"

enum Level {
    DEBUG, WARN, ERROR
}

class Logger {

    private level:Level

    constructor(level:Level = Level.DEBUG) {
        this.level = level
    }

    public message(m:string):void {
        console.log('|' + Level[this.level] + '|', m)
    }
}

let debugLogger:Logger = new Logger()

debugLogger.message('Hello!')


class NewLogger extends Logger {

    constructor(level:Level) {
        super(level)
    }

    public message(m='#################'):void {
        super.message(m)
    }
}

let newLogger:NewLogger = new NewLogger(Level.WARN);
newLogger.message();
newLogger.message(' AAAA ')

//
//
//

class Animal {

  private name:string

  constructor(name:string) {
    this.name = name;
  }
}

//new Animal('Cat').name

class Goat extends Animal {

    constructor(name:string) {
        super(name)
    }

}

//protected

class Person {

    constructor(private readonly name:string, protected age:number) {}

}

let person:Person = new Person('name', 20)

class Manager extends Person {

    constructor(protected department:string) {
        super('Manager', 30)
    }

    public getAge():number {
        return this.age
    }

}

//static
class Contstans {

    private constructor() {}

    static readonly PI:number = 3.14

}

let pi:number = Contstans.PI

//class as interface

class Point {
    x:number;
    y:number;
}

interface Point3D extends Point {
    z:number;
}

let point3D:Point3D = {x:1, y:2, z:3}
let point2D:Point = point3D as Point

console.log('point2d ~ ', point2D)
