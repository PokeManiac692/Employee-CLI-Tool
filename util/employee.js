const fs = require('fs');

function addEmployee(firstName, lastName, age, contactNumber, emailAddress) {
  const employeeID = getNextEmployeeID();
  const employeeData = {
    firstName,
    lastName,
    age,
    contactNumber,
    emailAddress,
  };
  const filePath = `employees/${employeeID}`;

  fs.writeFile(filePath, JSON.stringify(employeeData), (err) => {
    if (err) throw err;
    console.log(`Employee ${firstName} ${lastName} added with ID ${employeeID}`);
  });
}

function getNextEmployeeID() {
  const employeeIDs = fs.readdirSync('employees');
  return employeeIDs.length + 1;
}

function getEmployeeByID(employeeID) {
  const filePath = `employees/${employeeID}`;

  if (!fs.existsSync(filePath)) {
    console.log(`Employee with ID ${employeeID} does not exist`);
    return;
  }

  const employeeData = fs.readFileSync(filePath, 'utf8');
  console.log(`Employee ${employeeID}: ${employeeData}`);
}

function getEmployeeByName(firstName, lastName) {
  const employeeIDs = fs.readdirSync('employees');
  const matchingEmployees = employeeIDs.filter((employeeID) => {
    const filePath = `employees/${employeeID}`;
    const employeeData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return employeeData.firstName === firstName && employeeData.lastName === lastName;
  });

  if (matchingEmployees.length === 0) {
    console.log(`No employees found with name ${firstName} ${lastName}`);
    return;
  }

  matchingEmployees.forEach((employeeID) => {
    const filePath = `employees/${employeeID}`;
    const employeeData = fs.readFileSync(filePath, 'utf8');
    console.log(`Employee ${employeeID}: ${employeeData}`);
  });
}

function getEmployeeByEmail(emailAddress) {
  const employeeIDs = fs.readdirSync('employees');
  const matchingEmployees = employeeIDs.filter((employeeID) => {
    const filePath = `employees/${employeeID}`;
    const employeeData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return employeeData.emailAddress === emailAddress;
  });

  if (matchingEmployees.length === 0) {
    console.log(`No employees found with email address ${emailAddress}`);
    return;
  }

  matchingEmployees.forEach((employeeID) => {
    const filePath = `employees/${employeeID}`;
    const employeeData = fs.readFileSync(filePath, 'utf8');
    console.log(`Employee ${employeeID}: ${employeeData}`);
  });
}

function getAllEmployees() {
  const employeeIDs = fs.readdirSync('employees');
  employeeIDs.forEach((employeeID) =>
  {
    const filePath = `employees/${employeeID}`;
    const employeeData = fs.readFileSync(filePath, 'utf8');
    console.log(`Employee ${employeeID}: ${employeeData}`);
    });
    }
    
    function showMissingDatabase() {
    const employeeIDs = fs.readdirSync('employees');
    const missingIDs = [];
    
    for (let i = 1; i <= employeeIDs.length; i++) {
    if (!employeeIDs.includes(`${i}.txt`)) {
    missingIDs.push(i);
    }
    }
    
    if (missingIDs.length === 0) {
    console.log('No missing employee data found');
    return;
    }
    
    console.log(`Missing employee data for IDs: ${missingIDs.join(', ')}`);
    }
    
    module.exports = {
    addEmployee,
    getEmployeeByID,
    getEmployeeByName,
    getEmployeeByEmail,
    getAllEmployees,
    showMissingDatabase,
    };