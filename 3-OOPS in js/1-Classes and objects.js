/* TOPIC-1 */
// OBJECTS in JS //
const student = {
    fullName: "Satrasala Tharun",
    marks: 94.4,
    printMarks: function () {
        console.log("marks =", this.marks)
    },
};

student.printMarks();

// JS objects has special property called prototype.

const employee = {
    // First way (easy)
    calTax1() {
        console.log("The tax rate is 10%");
    },
    // Second way (has extra words)
    calTax2: function () {
        console.log("The tax rate has increased to 20%");
    }
};

employee.calTax1();
employee.calTax2();

const arjunReddy = {
    salary: 50000,
};

// set a prototype

arjunReddy.__proto__ = employee;
console.log(arjunReddy);
arjunReddy.calTax1();

/* If object and prototype have same method,
objects method will be used. */
// Ex:-

const rajKumar = {
    salary: 70000,
    calTax1() {
        console.log("The tax rate is 30% for rajKumar")
    }
};

rajKumar.__proto__ = employee;
rajKumar.calTax1();

// CLASSES in JS //

class tataCar {
    constructor(info, mileage) {
        console.log("Creating a new object");
        this.purpose = info;
        this.Mileage = mileage;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
};

console.log(tataCar);
let nano = new tataCar("Middle class car", 100);
let mahindra = new tataCar;
mahindra.purpose = "Farmer Tractors";
mahindra.Mileage = 50;

nano.start();
mahindra.start();
mahindra.stop();

// Setting a value in tataCar
nano.setBrand("Nano Car");
mahindra.setBrand("TATA Mahindra");

// Print the value
console.log(nano);
console.log(mahindra);

// INHERITANCE in JS //

class person {
    constructor() {
        this.species = "Homo sapiens";
    }
    eat() {
        console.log("Eat Food");
    }
    sleep() {
        console.log("It's bed time");
    }
    work() {
        console.log("No work to do");
    }
}

/* If parent and child has same method.
Child's method is used*/

class Engineer extends person {
    work() {
        console.log("Slove problems and bulid something");
    }
}

class Doctor extends person {
    work() {
        console.log("Treat patients with care");
    }
}

let tharunObj = new Engineer;
let arjunObj = new Doctor;

tharunObj.work();
tharunObj.eat();
arjunObj.work();

// the method in person is also inherited to engineer

let per1 = new person;
let e1 = new Engineer;

console.log(per1);
console.log(e1);

// SUPER KEYWORD

class person2 {
    constructor(name) {
        console.log("2)Enter parent constructor");
        this.gender = "male";
        this.name = name;
    }
    eat() {
        console.log("Eat snacks");
    }
}

class Engineer2 extends person2 {
    constructor(branch, name) {
        console.log("1)Enter child constructor");
        super(name);
        this.branch = branch;
        console.log("3)Exits child constructor");
    }
    work() {
        super.eat();
        console.log("Bulid a website");
    }
}

let myObj = new Engineer2("CSE Branch", "Tharun Satrasala");

console.log(myObj);
myObj.work();

// Practice Questions

/* 1) a)You are creating a website for your college.Create a class User with 2 properties,
name and email.It has a method called viewData() that allows user to view website data.
b) Create a new class called Admin which inherits from User.Add a new method
called editData to Admin that allows it to edit website data. */

// Ans) a)
let Data = `Website Info:-
1) This is a website made for SRM AP Students.
2) This website helps students in there hostel booking.
3) This is also used for knowing Mess food daily menu.`

class User {
    constructor(name, email) {
        this.userName = name;
        this.UserEmail = email;
    }
    viewData() {
        console.log("Old Data =", Data);
    }
}

let student1 = new User("Tharun", "Tharun19@gamil.com");
let student2 = new User("Arjun", "konda12@gamil.com");
console.log(student1);
console.log(student2);
student1.viewData();

// Ans) b)
class Admin extends User {
    constructor(name, email) {
        super(name, email)
    }
    editData() {
        Data = "Some new value";
    }
}

let Admin1 = new Admin("adminRaju", "Raju34@gamil.com");

Admin1.editData();
console.log(Admin1);
console.log("New Data =", Data);

/* TOPIC-2 */
// ERROR HANDLING //
let a = 3;
let b = 19;
console.log("a =", a);
console.log("b =", b);
console.log("a+b =", a + b);
try {
    console.log("a-b =", a - c);
} catch (err) {
    console.log(err);
}
console.log("axb =", a * b);
console.log("a/b =", a / b);