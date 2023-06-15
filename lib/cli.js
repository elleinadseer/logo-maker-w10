const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Square } = require('/Users/danielle/bootcamp/logo-maker-w10/lib/shapes.js');
const { SVG, LogoText} = require("/Users/danielle/bootcamp/logo-maker-w10/lib/Svg.js"); 
// const questions = require ('./questions');

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

        return writeFile("logo.svg", markup)
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('There is an error.');
      });
  }

generateSVG(options) {
 const logoText = new LogoText(options.textForLogo, options.textColourForLogo);

 switch (options.shapeForLogo) {
    case "Circle":
         const circle = new Circle(options.shapeColourForLogo);
         return new SVG(circle, logoText);
    case "Square": 
         const square = new Square(options.shapeColourForLogo);
         return new SVG(square, logoText);
    case "Triangle": 
         const triangle = new Triangle(options.shapeColourForLogo);
         return new SVG(triangle, logoText);
        }
     }
}

module.exports = CLI;
