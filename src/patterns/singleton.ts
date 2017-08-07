
class Singleton {

    private static instance:Singleton

    private constructor() {}

    static getInstance():Singleton {
        if(!this.instance) {
            this.instance = new Singleton()
        }
        return this.instance
    }
}

let s1:Singleton = Singleton.getInstance()
let s2:Singleton = Singleton.getInstance()

console.log(s1 === s2)
