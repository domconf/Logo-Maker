const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");
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

    const answers = await inquirer.createPromptModule(questions);

    let userText = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        userText = answers.text;
    } else {
        console.log("Please enter no more than 3 characters!");
        return;
    }

    userFontColor = answers["textColor"];
    userShapeType = answers["shape"];
    userShapeColor = answers["shapeColor"];
}

init();