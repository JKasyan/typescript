
enum LogLevel {
    DEBUG = 1, WARN
}

console.log(LogLevel.DEBUG + ' ~ ' + LogLevel[LogLevel.DEBUG])
console.log(LogLevel.WARN + ' ~ ' + LogLevel[LogLevel.WARN])

const enum Access {
    READ, EDIT = 2
}

console.log(Access.READ)
console.log(Access.EDIT)
