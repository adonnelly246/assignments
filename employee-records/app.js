//create an empty array named employees
var employees = []
// create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".
//This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.
function Employees(name, title, salary, printEmployeeForm){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time";
    
this.printEmployeeForm = function () {
    console.log("Name: " + this.name + ", " + "Title: "+ this.title, + ", " + "Salary: "+ this.salary + ", " + "Status: " + this.status)
  };
}

 var employeeOne = new Employees( "Sarrah Brown", "Director of Marketing", "90,000/year")
var emplyeeTwo = new Employees ( "George Hammon", "Instructor", "75,000/year")

employeeOne.printEmployeeForm()
emplyeeTwo.printEmployeeForm()

//(e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")




