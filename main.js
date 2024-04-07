#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what you want to add in your todos?",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "do you want to add more ?",
            default: "true",
        }
    ]);
    todos.push(todoQuestion.firstQuestion);
    console.log(todos);
    condition = todoQuestion.secondQuestion;
}
