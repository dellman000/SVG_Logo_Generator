const fs = require('fs')
const inquirer = require('inquirer');
const { Circle, Shape, Triangle } = require('./lib/shapes');
require('./lib/shapes')
// const { choices } = require('yargs');

const questions = [
    {
        name: 'text',
        message: 'What Text(less than 3 characters) do you want to display?',
        validate: function (name) {
            if (name.length > 3) {
                return false
            }
            else {
                return true
            }
        }
    },
    {
        name: 'textColor',
        default: 'white',
        message: 'What Text color do you want to display?'

    },
    {
        name: 'shape',
        message: 'Pick your shape',
        type: 'list',
        default: 'circle',
        choices: ['circle', 'triangle', 'square']
    },
    {
        name: 'shapeColor',
        default: 'green',
        message: 'What color do you want to display for the shape?',
    },
];

function init() {

    inquirer.prompt(questions)
        .then((OBJ) => {
            // console.log(OBJ)
            const shape = Shape.createShape(OBJ.shape)
            shape.setText(OBJ.text)
            shape.setFillColor(OBJ.shapeColor)
            shape.setTextColor(OBJ.textColor)

            let SVGTemplate = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">  ${shape.render()}  </svg>`
            // console.log(SVGTemplate)
            fs.writeFile(`./logo.svg`, SVGTemplate, (err) => {
                if (err) {
                    return console.log(err)
                }
            })
        }
        ).then(()=>console.log('Generated logo.svg'))
}
init()