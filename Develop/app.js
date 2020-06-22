const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let allEmployees = [];

// let e = new Engineer({
//     name: "Burrito",
//     id: "420",
//     github:"swag420@github",
//     email: "smokeweedeveryday@gmail.com"
// })

// console.log(render([e]))

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function inquire() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Welcome to the team generator! Select your role",
            choices: [
                "Manager", "Engineer", "Intern"
            ]
        }
    ]).then(async (data) => {
        console.log(data.role)
        if (data.role === "Engineer") {
            engiFunction()
        } else if (data.role === "Manager") {
            managerFunction()
        } else if (data.role === "Intern") {
            internFunction()
        }

    })
}
inquire()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function engiFunction() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name here"
        },
        {
            type: "input",
            name: "id",
            message: "Enter your ID number here"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your github username here"
        },
        {
            type: "confirm",
            name: "redo",
            message: "Press enter if you want to add another employee",
            default: true,
        }
    ]).then((data) =>{
        const newPerson = new Engineer(data)
        allEmployees.push(newPerson)
        if (data.redo) {
            inquire()
        } else {
           const output = render(allEmployees)
           fs.writeFile(outputPath, output, function(err){
               if (err) throw (err)
           })
        
        }
    })
}

function managerFunction() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name here"
        },
        {
            type: "input",
            name: "id",
            message: "Enter your ID number here"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter your office number here"
        },
        {
            type: "confirm",
            name: "redo",
            message: "Press enter if you want to add another employee",
            default: true,
        }
    ]).then((data) => {
        const newPerson = new Manager(data)
        allEmployees.push(newPerson)
        if (data.redo) {
            inquire()
        } else {
            const output = render(allEmployees)
            fs.writeFile(outputPath, output, function(err){
                if (err) throw (err)
            })
        }
    })
}



function internFunction() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name here"
        },
        {
            type: "input",
            name: "id",
            message: "Enter your ID number here"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email"
        },
        {
            type: "input",
            name: "school",
            message: "Enter your school here"
        },
        {
            type: "confirm",
            name: "redo",
            message: "Press enter if you want to add another employee",
            default: true,
        }
    ]).then((data) => {
        const newPerson = new Intern(data)
        allEmployees.push(newPerson)
        if (data.redo) {
            inquire()
        } else {
            const output = render(allEmployees)
            fs.writeFile(outputPath, output, function (err) {
                if (err) throw (err);
            })
        }
    })
}





// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
