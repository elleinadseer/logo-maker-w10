const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Square } = require('/Users/danielle/bootcamp/logo-maker-w10/lib/shapes.js');
const { SVG, InnerText} = require('/Users/danielle/bootcamp/logo-maker-w10/lib/svg.js'); 

function initialize() {
  const exists = fs.existsSync('/Users/danielle/bootcamp/logo-maker-w10/examples');
  if(exists === true) {
    return;
  }
  fs.mkdirSync('/Users/danielle/bootcamp/logo-maker-w10/examples')
}

class CLI {
  constructor() {
  }

  run() {

    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'textForLogo',
          message: 'What letters do you want on the logo? (3 chars max)',
        },
        {
            type: 'input',
            name: 'textColourForLogo',
            message: 'What colour do you what the text to be?',
          },
          {
            type: 'list',
            name: 'shapeForLogo',
            message: 'What shape do you what the logo to be?',
            choices: ['Circle', 'Triangle', 'Square']
          },
          {
            type: 'input',
            name: 'shapeColourForLogo',
            message: 'What colour do you what the shape to be?',
          },
      ])
      .then((responses) => {

        const svg = this.generateSVG(responses);

        const markup = svg.render();

        return writeFile("/Users/danielle/bootcamp/logo-maker-w10/examples/logo.svg", markup)
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('There is an error.');
      });
  }

generateSVG(options) {
 const innerText = new InnerText(options.textForLogo, options.textColourForLogo);

 switch (options.shapeForLogo) {
    case "Circle":
         const circle = new Circle(options.shapeColourForLogo);
         return new SVG(circle, innerText);
    case "Square": 
         const square = new Square(options.shapeColourForLogo);
         return new SVG(square, innerText);
    case "Triangle": 
         const triangle = new Triangle(options.shapeColourForLogo);
         return new SVG(triangle, innerText);
        }
     }
}

initialize();

module.exports = CLI;

