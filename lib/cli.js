const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Square } = require('.shapes');
const { LogoText, SVG } = require('./Svg');
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
}

module.exports = CLI;
