const { SVG, InnerText} = require("/Users/danielle/bootcamp/logo-maker-w10/lib/svg.js"); 
const { Square } = require("/Users/danielle/bootcamp/logo-maker-w10/lib/shapes.js");

// Tests to see if the rendering for the SVG file execution is working correctly
test("renders 300x200 svg file", () => {

const color = "red";
const expectedSvg =
     `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red" /><text x="150" y="110" font-size="40" text-anchor="middle" fill="red">Hi</text></svg>`;

const square = new Square (color);
const innerText = new InnerText ("Hi", color);

const actualSvg = new SVG (square, innerText); 
expect(actualSvg.render()).toEqual(expectedSvg);

});
