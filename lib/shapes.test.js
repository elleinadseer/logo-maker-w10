
const { Square, Triangle, Circle} = require("/Users/danielle/bootcamp/logo-maker-w10/lib/shapes.js");

describe("Circle", () => {
    test("renders green circle SVG", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />'; 
        const circle = new Circle();
        circle.setColor("green");
        const actualSvg = circle.render();
            console.log(actualSvg);
        expect (actualSvg).toEqual(expectedSvg);
    });
});

describe("Triangle", () => {
test("renders red triangle SVG", () => {
    const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="red" />'; 
    const triangle = new Triangle();
    triangle.setColor("red");
    const actualSvg = triangle.render();
    console.log(actualSvg);
    expect (actualSvg).toEqual(expectedSvg);
});
});



describe("Square", () => {
  test("renders blue square SVG", () => {
    const expectedSvg =
    `<rect x="90" y="40" width="120" height="120" fill="blue" />`;
    const square = new Square();
    square.setColor("blue");
    const actualSvg = square.render();
    console.log(actualSvg);
    expect (actualSvg).toEqual(expectedSvg);
});
});
