
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