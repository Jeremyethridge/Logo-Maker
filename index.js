const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers) {
  let svgString = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <g>`;
  
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  svgString += `
        <text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
      </g>
    </svg>`;

  fs.writeFile(fileName, svgString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter up to three characters:",
        name: "text",
      },
      {
        type: "input",
        message: "Enter text color:",
        name: "textColor",
      },
      {
        type: "list",
        message: "Choose a shape:",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Enter shape color:",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      while (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        return promptUser();
      }
      writeToFile("logo.svg", answers);
    });
}

promptUser();