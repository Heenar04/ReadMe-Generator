const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// importing file from 
// var server = http.createServer(getUserInput);

const init = async() =>{
// array of questions for user
try{
        const questions = await inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your Project? ",
            name: "title",

        },
        {
            type: "input",
            message: "Provide  the description of  project:",
            name: "description",

        },
        {
            type: "input",
            message: "if applicable, write the steps required for its installation",
            name: "installation",
        },

        {
            type: "input",
            message: "Give the content detail in  a table ",
            name: "content",


        },


        {
            type: "input",
            message: "Is there  any neccessary tests needed? ",
            name: "test",

        },

        {
            type: "input",
            message: "is there any License use?If Yes, please provide the name.",
            name: "license",
            choices: ['None', 'MIT','Apache'],

        },
        {
            type: "input",
            message: "Contribution",
            name: "contribution"
        },

        

        {
            type: 'input',
            message: 'What is your preferred method of communication?',
            name: 'contact',
            
        }
    ]);
  
    // console.log(questions)
    const filename = `${questions.message}`;

    // function to write README file
    function writeToFile(fileName, questions) {
        return writeToFileAsync(fileName, questions);

    } 
    console.log('Successfully wrote to answers');
} catch (err) {
  console.log(err);
}
    


    // Starting our servers
  
    init();
}

    // function to initialize program
    // function init() {

    // }
  // // function call to initialize program
    // init();
   // }
