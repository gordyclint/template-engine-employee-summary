var fs = require("fs");
var inquirer = require("inquirer");
var Employee = require("./lib/employee");
var employeeHTML = require("./templates/engineer");
var counter = 1;
var contructorArray = [];

function questions() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is your name?"
        },
        {
            name: "email",
            type: "input",
            message: "What is your email?"
        },
        {
            name: "title",
            type: "input",
            message: "What is your title?"
        }
    ]).then(function (userInput) {

        var employee = new Employee(userInput.name, userInput.email, userInput.title)
         
        contructorArray.push(employee);
        console.log(employee);

        if (counter < 5) {
            questions();
           
        }
        else
        {
           
            return;
        }
        counter++;
  

    }).then(function (){
         
    })

}

 
questions();

if (counter >= 5) {
    makeHTML();
}
 
function makeHTML() {
 
  

    var generatedHTML = employeeHTML(contructorArray)
    console.log(generatedHTML);
     fs.writeFile("./output/employee.html", "test", function (err) {

    })
}

