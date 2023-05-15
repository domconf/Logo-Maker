const inquirer = require('inquirer');
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="120" font-size="75" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}


const questions = [
    {
        type: "input",
        message: "Please enter your initials, no more than three characters.",
        name: "initials"
    }, {
        type: "input",
        message: "Please enter your preferred text color.",
        name: "textColor",
    }, {
        type: "list",
        message: "Please choose a shape for your logo",
        name: "shapeType",
        choices: ["Triangle", "Square", "Circle"],
    }, {
        type: "input",
        message: "Please enter your preferred shape color.",
        name: "shapeColor",
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("SVG logo has been generated!")
    });
}


async function init() {
    let svgString = "";
    let svgFile = "logo.svg";

    const answers = await inquirer.prompt(questions);

    userInitials = answers["initials"];
    userFontColor = answers["textColor"];
    userShapeType = answers["shapeType"];
    userShapeColor = answers["shapeColor"];

    let userShape;
    if (userShapeType === "Square") {
        userShape = new Square();
    }
    else if (userShapeType === "Circle") {
        userShape = new Circle();
    }
    else if (userShapeType === "Triangle") {
        userShape = new Triangle();
    }

    userShape.setColor(userShapeColor);

    const svg = new Svg();
    svg.setTextElement(userInitials, userFontColor);
    svg.setShapeElement(userShape);
    svgString = svg.render();

    writeToFile(svgFile, svgString);

}

init();