// Starting employee object
const employee = {
  name: "Benard",
  streetAddress: "Kasarani"
};

// 1 & 2: Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,   // clone the employee
    [key]: value   // add/overwrite the key
  };
}

// 3: Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;  // directly modify the object
  return employee;
}

// 4 & 5: Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee }; // clone
  delete newEmployee[key];             // delete from clone
  return newEmployee;                  // return clone
}

// 6 & 7: Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];  // directly delete from original
  return employee;
}