// Creating an Object

let student = {
    "firstName" : "Ricky",
    "lastName"  : "Donald",
    "age"       : 23,
    "Education" : "Engineering"
}
console.log(student);

// Creating a JS object using a new Keyword (Traditional Way)

let person = new Object();
person.name = 'Mathew'
person.age = 50
person.job = 'Comedian'

console.log(person);

// Creating an JS object Using a Constructor

function dog(name, age, bread){
    this.name = name
    this.age = age
    this.bread = bread
}
var details = dog('Tommy', '2yrs', 'pug')
console.log(details);

// Object Properties
student.age = 84;
console.log(student)


// Object Accessors 

// Getter

let car = {
    model : 'BMW',
    color : 'Black',
    fuel_type : 'Diesel',
    get fuel(){
        return this.fuel_type;
    },
};
console.log(car.fuel_type);

// Setter 

let car1 = {
    model : 'KIA',
    color : 'Red',
    fuel_type : '',
    set fuel(fuel){
        this.fuel_type = fuel;
    },
};
car1.fuel = 'Petrol';
console.log(car1.fuel_type)