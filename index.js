//const inquirer = require("inquirer");
import inquirer from "inquirer";
import Engineer from "./lib/Engineer.js";
import Manager from "./lib/Manager.js";
import Intern from "./lib/Intern.js";
//new employees will be pushed to this []
const employees = [];
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the Manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Manager's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the Manager's officeNumber?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the Engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Engineer's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Engineer's email?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is the Engineer's gitHub?",
  },
];
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the Intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Intern's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the Intern's school?",
  },
];
const nextQuestion = [
  {
    type: "list",
    name: "choice",
    message: "What do you want to do next?",
    choices: ["Add Intern?", "Add Engineer?", "I'm done"],
  },
];

function start() {
  inquirer.prompt(managerQuestions).then((answers) => {
    //console.log(answers);
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employees.push(manager);
    //console.log(employees);
    askNext();
  });
}

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.gitHub
    );
    employees.push(engineer);
    askNext();
  });
}

function addIntern() {
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    employees.push(intern);
    askNext();
  });
}

function completeTeam() {
  console.log(employees);
}

function askNext() {
  inquirer.prompt(nextQuestion).then((choiceAnswers) => {
    switch (choiceAnswers.choice) {
      case "Add Intern?":
        addIntern();
        break;
      case "Add Engineer?":
        addEngineer();
        break;
      case "I'm done":
        completeTeam();
        break;
      default:
        return;
    }
  });
}

start();

/*
Create employee classes -
Write test for classes - couple more tests in other files and change line 1 of all files
Get information from user - with inquier - 
Use information to create employee objects using class I create -
Add employee to array of employees -
Use array of employees to create html string
Use fs to generate html file
*/
