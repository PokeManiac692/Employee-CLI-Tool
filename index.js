const { displayMenu, getUserInput } = require('./util/menu');

const {
  addEmployee,
  getEmployeeByID,
  getEmployeeByName,
  getEmployeeByEmail,
  getAllEmployees,
  showMissingDatabase,
} = require('./util/employee');

async function main() {
  while (true) {
    displayMenu();
    const choice = await getUserInput('Please enter your choice: ');
    console.log('')



    switch (choice) {
      case '1':
        const firstName = await getUserInput('Enter first name: ');
        const lastName = await getUserInput('Enter last name: ');
        const age = parseInt(await getUserInput('Enter age: '), 10);
        const contactNumber = await getUserInput('Enter contact number: ');
        const emailAddress = await getUserInput('Enter email address: ');

        if (isNaN(age)) {
          console.log('Age must be a number');
          continue;
        }

        addEmployee(firstName, lastName, age, contactNumber, emailAddress);
        break;

      case '2':
        const employeeID = parseInt(await getUserInput('Enter employee ID: '), 10);

        if (isNaN(employeeID)) {
          console.log('Employee ID must be a number');
          continue;
        }

        getEmployeeByID(employeeID);
        break;

      case '3':
        const firstNameSearch = await getUserInput('Enter first name: ');
        const lastNameSearch = await getUserInput('Enter last name: ');
        getEmployeeByName(firstNameSearch, lastNameSearch);
        break;

      case '4':
        const emailAddressSearch = await getUserInput('Enter email address: ');
        getEmployeeByEmail(emailAddressSearch);
        break;

      case '5':
        getAllEmployees();
        break;

      case '6':
        showMissingDatabase();
        break;

      default:
        console.log('Invalid choice');
        break;
    }
  }
}

main();