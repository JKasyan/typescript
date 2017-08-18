
class Build {
    numberOfFloors:number;
    constructor(numberOfFloors:number = 1) {
        this.numberOfFloors = numberOfFloors
    }
}
class House extends Build {}
class Garage extends Build {}

let buildings = [new House(2), new Garage(1), null, undefined, {numberOfFloors: 100}, new Build(2)];

for(let i = 0;i < buildings.length;i++) {
    if(buildings[i]) {
        console.log(buildings[i].numberOfFloors)
    }
}
