// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        name: "title",
        message: "What is your projects name?",

    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project",

    },
    {
        type: "list",
        name: "license",
        message: "What kind of license does your project use?",
        choices: ["MIT", "Other"],
    },
    {
        type: ,
        name: ,
        message: ,
    }
    
];

inquirer.prompt(questions).then((data) => {
    console.log(data);
})


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
