type id = string | number;

type LicensePlate = {
    readonly plate: id;
    state: string;
}

let myPlate: LicensePlate = {
    plate: '34DF80',
    state: 'IN'
}

let myOtherPlate: LicensePlate = {
    plate: 984782,
    state: 'MI'
}

console.log(myPlate);
console.log(myOtherPlate);

function printId(id: Readonly<id>): void {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id * 2);
    }
}

printId(myPlate.plate);
printId(myOtherPlate.plate);

