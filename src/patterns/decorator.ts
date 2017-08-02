
interface StringCleanable {
    remove(row:string):string;
}

class CleanAllPluses implements StringCleanable {
    public remove(row:string):string {
        let res:string =  row.split('+').join('');
        return res
    }
}

class PrependUnderscore implements StringCleanable {

    private cleaner:StringCleanable;

    constructor(cleaner:StringCleanable) {
        this.cleaner = cleaner;
    }

    public remove(row:string):string {
        let res:string = '_' + this.cleaner.remove(row)
        return res;
    }
}

class AppendArrow implements StringCleanable {

    private cleaner:StringCleanable;

    constructor(cleaner:StringCleanable) {
        this.cleaner = cleaner;
    }

    public remove(row:string):string {
        let res:string = this.cleaner.remove(row) + '->'
        return res;
    }
}

let row1:string = '123+456+789';
let cleaner:StringCleanable = new CleanAllPluses()

let res1:string = cleaner.remove(row1)
console.log('without pluses -> ', res1)

let cleaner2:StringCleanable = new PrependUnderscore(cleaner)
let res2:string = cleaner2.remove(row1)
console.log('prepended underscore -> ', res2)

let cleaner3:StringCleanable = new AppendArrow(cleaner2);
let res3:string = cleaner3.remove(row1)
console.log('with arrow -> ', res3)

let cleaner4:StringCleanable = new AppendArrow(new PrependUnderscore(new CleanAllPluses()))
let res4:string = cleaner4.remove(row1)
console.log('with arrow again -> ', res4)
