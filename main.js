#! /usr/bin/env node
import inquirer from "inquirer";
while (true) {
    const input = await inquirer.prompt([
        {
            name: "shoesname",
            type: "string",
            message: "Enter  My Favorite Shoes CompanyName?to UPPER CASE",
        }
    ]);
    let shoescomp = ["NIKE", "CLARK", "JORDAN",];
    let randomsuggest = Math.floor(Math.random() * shoescomp.length + 1);
    let compValue = shoescomp[randomsuggest];
    if (input.shoesname == compValue) {
        console.log("Congratulation you Guess correct Shoes Company. Thats My Favorite Shoes" + compValue);
    }
    else {
        console.log(" bad luck you guess wrong name. Please Try Agin");
    }
}
;
