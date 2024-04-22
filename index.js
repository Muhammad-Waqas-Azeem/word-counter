#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "paragrph",
        message: "Enter your paragraph or text"
    }
]);
console.log("\n");
let character = answer.paragrph.split(" ").join('');
const words = answer.paragrph.trim().split(" ");
console.log(`Total words in your paragraph is ${words.length} & total alphabets in your paragraph is ${character.length}`);
