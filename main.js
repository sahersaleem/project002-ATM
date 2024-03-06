import inquirer from "inquirer";
const answers = await inquirer
    .prompt([
    {
        type: "string",
        name: "userID",
        message: "Enter your ID : "
    },
    {
        type: "number",
        name: "pin",
        message: "Enter your pin : "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Choose your accountype:"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Choose your transaction type"
    },
    {
        type: "list",
        name: "amount",
        choices: [100, 1000, 100000, 10000],
        message: "Choose your amount:",
        when(answers) {
            return (answers.transactionType == "Fast Cash");
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount:",
        when(answers) {
            return (answers.transactionType == "Withdraw");
        }
    }
]);
if (answers.userID && answers.pin) {
    const balance = 50000;
    console.log(`your current balnce is ${balance}`);
    const enteredAmount = answers.amount;
    console.log(`you entered amount is ${enteredAmount}`);
    const remainingAmount = balance - enteredAmount;
    if (balance >= enteredAmount) {
        console.log(`your remaining amount is ${remainingAmount}`);
    }
    else {
        console.log("Insufficient amount");
    }
}
