const readline = require('readline');



function displayMenu() {
  console.log('========  Main Menu  ========');
  console.log('1. Add an employee');
  console.log('2. View an employee by ID');
  console.log('3. View an employee by Name');
  console.log('4. View an employee by E-mail');
  console.log('5. View all Employees');
  console.log('6. Show missing Database');
  console.log('')
  console.log('=============================')
}

function getUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

module.exports = {
  displayMenu,
  getUserInput,
};
