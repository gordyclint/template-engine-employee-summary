// Dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const open = require('open');

// Javascript Libraries
const Employee = require("./lib/employee");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

// Promisify Scripts
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);



// INQUIRER
// ======================================================================================================

// Questions
function questions() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is your name?"
        },
        {
            name: "id",
            type: "input",
            message: "What is your id?"
        },
        {
            name: "email",
            type: "input",
            message: "What is your email?"
        },
        {
            name: "role",
            type: "input",
            message: "What is your role?"
        }

    ]).then(function (data) {

        if (data.role === 'Engineer') {
            inquirer.prompt([
                {
                    name: 'github',
                    type: 'input',
                    message: 'What is your github username?'
                }
            ]);
        } else if (data.role === 'Intern') {
            inquirer.prompt([
                {
                    name: 'school',
                    type: 'input',
                    message: 'What University did you graduate from?'
                }
            ]);
        } else if (data.role === 'Manager') {
            inquirer.prompt([
                {
                    name: 'phone',
                    type: 'input',
                    message: 'What is your office number?'
                }
            ]);
        }; 
    });

};


// // Code to add members of team 
// const newMember = async () => {
//     const responses = await questions();

//     // Adding code to "team" object
//     teams.push();
//     console.log('Successfully added ' + employee);

// };

// // Generating a card
// const genCard = async (role, data) => {

//     let card = await readFile(path.join(__dirname, './templates', `${role}-card.html`), 'utf-8');

//     for (let prop in data) {
//         const reg = new RegExp(`{${prop}}`, 'gi');
//         card = card.replace(reg, data[prop]);
//     }
//     console.log(`Your cards have been generated`);

//     return card;

// };

// // CREATING NEW HTML

// const generatedHTML = async () => {

//     let mainHTML = await readFile(path.join(__dirname, './templates', 'main.html'), 'utf-8');

//     // Variable to store cards
//     let cards = '';

//     // Grabbing the team data...
//     const teamArr = [teams.manager, teams.engineer, teams.intern];
//     for (employee of teamArr) {
//         const { name, id, email } = employee;
//         const role = employee.getRole().toLowerCase();
//         let special = '';

//         switch (role) {
//             case 'manager':
//                 special = employee.getNumber();
//                 break;
//             case 'engineer':
//                 special = employee.getGithub();
//                 break;
//             case 'intern':
//                 special = employee.getSchool();
//         };

//         //appending cards
//         cards += await genCard(role, { name, id, email, special });
//     }

//     //replace main.html with cards and return it
//     return mainHTML.replace('{ CARD }', cards);

// }

// //initiating the app
// async function init() {

//     try {
//         //adding manager
//         await newMember();

//         //Await to create HTML
//         let html = await generatedHTML();

//         //Save html to output folder
//         await writeFile(path.join(__dirname, 'output', 'team.html'), html, 'utf-8');

//         //Open HTML File
//         await open(path.join(__dirname, 'output', 'team.html'));

//     }

//     //general error function
//     catch (err) {
//         console.log(err);
//     };
// };

// init();
questions();
