//All dependencies and files are are required here to enable use
const inquirer = require("inquirer")
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown")



//This is the array of questions that will determine the user input
const questions = [
    
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
        type: "input",
        name: "installation",
        message: "What commands should we run for dependencies?",
        default: "npm i",
    },
    {
        type: "input",
        name: "usage",
        message: "How is this application used?"

    },
    {
        type: "list",
        name: "license",
        message: "What kind of license does your project use?",
        choices: ["MIT", "GNU GPLv3", "Apache License 2.0"],
    },
     {
         type: "input",
         name: "contributor",
         message: "How does a user contribute to this project?"
     },
     {  
        type: "input",
        name: "test",
        message: "What commands should be run for tests?",
        default: "npm run test", 
     },
     {
        type: "input",
        message: "What is your Github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }
    
];




//function declaration that prompts the questions above, accesses the markdown in the generateMarkdown.js file and writes it to a README.md file that is created
function init() {
    inquirer.prompt(questions).then((data) => {
        const markdown = generateMarkdown(data);
        fs.writeFile("README.md", markdown, (err) => {
            err ? console.log(err) : console.log("File was written!!");
        })
    });
}


init();

