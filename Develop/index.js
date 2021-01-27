const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown")
// importing file from 
// var server = http.createServer(getUserInput);

const init = async () => {
    // array of questions for user
    try {
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
                type: "list",
                message: "Is there  any neccessary tests needed? ",
                name: "test",
                choices: ['Yes', 'No']
            },

            // {
            //     type: "input",
            //     message: "please provide test needed ",
            //     name: "type",
            // },

            {
                type: "list",
                message: "is there any License use?If Yes, please provide the name.",
                name: "license",
                choices: ['None', 'MIT', 'Apache'],

            },

            {
                type: "input",
                message: "Contribution",
                name: "contribution"
            },



            {
                type: 'list',
                message: 'What is your preferred method of communication?',
                name: 'contact',
                choices: ['email', 'message', 'phone']

            },
            {
                type: 'input',
                message: 'please share the contact details ',
                name: 'detail ',
                choices: ['email', 'message', 'phone']

            }
        ]);




        // function to write README file

        await fs.writeFileSync("ReadMe2.md", generateMarkdown(questions));


        console.log('Successfully wrote to answers');
    } catch (err) {
        console.log(err);
    }



    // Starting our servers


}
init();
    // function to initialize program
    // function init() {

    // }
  // // function call to initialize program
    // init();
   // }
