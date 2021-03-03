//create an empty array named employees

// create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".

//This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.

//(e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")





//Here's a refresher for the constructor syntax:

function Car (year, make, model) {
    // use the "this" keyword to reference each object 
    // that is created from this constructor
    this.year = year;
    this.make = make;
    this.model = model;
}

// then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:

var myTacoma = new Car(2015, "Toyota", "Tacoma");