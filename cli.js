// write cli function with questions and writeFileSync

const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require ('./shapes')
const fs = require('fs');

class CLI {
    run (){
      return inquirer
      .prompt([
        {
            type: "input",
            name: "text",
            message: "Enter your logo text. Maximum of 3 characters."
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the text?' 
        },
        {
            type: 'checkbox',
            name: 'shape',
            message: 'Which shape would you like for your logo?',
            choices: [Circle, Square, Triangle]
        },
        {
            type: 'input',
            name: 'background',
            message: 'What color would you like the background?'
        }
      ])
      .then(({text, textColor, shape, background}) => {
        if(shape === "circle") {
            fs.writeFileSync(
                `logo.svg`,
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <${shape} cx="150" cy="100" r="80" fill="${background}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
                </svg>`
            );
        } else if (shape === 'square') {
            fs.writeFileSync(
                `logo.svg`,
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="90" y="40" width="120" height="120" fill="${background}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
                </svg>`
            );
        } else {
            fs.writeFileSync(
                `logo.svg`,
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150, 18 244, 182 56, 182" fill="${background}" />
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
                </svg>`
            );
        }
      })
      .then(() =>{
        // confirm that file has been written
        console.log('logo.svg has been generated, hooray!');
      })
      .catch((error) => {
        console.log(error);
      })
    }
    
}

module.exports = CLI