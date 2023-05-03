const inquirer = require('inquirer');
const generateMarkdown = require("./lib/generateMarkdown");
const fs = require("fs");
const path = require("path");

const questions = [
    {
        type: "input",
        message: "Please enter your initials.",
        name: "initials"
    }, {
        type: "input",
        message: "Please enter your preferred text color.",
        name: "text-color",
    }, {
        type: "list",
        message: "Please choose a shape for your logo",
        name: "shape",
        choices: ["Triangle", "Square", "Circle"],
    }, {
        type: "input",
        message: "Please enter your preferred shape color.",
        name: "shape-color",
    }
];
