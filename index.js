//const inquirer = require("inquirer");
import inquirer from "inquirer";
import Manager from "./lib/Manager";
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
    console.log(employees);
  });
}

start();

/*
Create employee classes -
Write test for classes - couple more tests in other files
Get information from user - with inquier
Use information to create employee objects using class I create 
Add employee to array of employees 
Use arroy of employees to create html string
Use fs to generate html file
*/
