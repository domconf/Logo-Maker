const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");
const path = require("path");
const { Circle, Triangle, Square } = require("./shapes");

const questions = [
    {
        type: "input",
        message: "Please enter your initials.",
        name: "initials"
    }, {
        type: "input",
        message: "Please enter your preferred text color.",
        name: "textColor",
    }, {
        type: "list",
        message: "Please choose a shape for your logo",
        name: "shape",
        choices: ["Triangle", "Square", "Circle"],
    }, {
        type: "input",
        message: "Please enter your preferred shape color.",
        name: "shapeColor",
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Generating logo.svg...");
        writeToFile("../lib/logo.svg", generateMarkdown({ ...responses }));
    })
}

init();