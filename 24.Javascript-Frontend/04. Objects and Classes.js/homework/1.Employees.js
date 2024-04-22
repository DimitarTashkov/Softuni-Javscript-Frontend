function solve(employeesNames) {
    const employees = {};
    for(const name of employeesNames) {
        employees[name] = name.length;
    }
    for(const employee in employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
    }
}
function fancySolve(employeesNames) {
    const employees = [];

    for(const name of employeesNames) {
        const employee = {
            name
            ,personalNumber: name.length
        };
        employees.push(employee);
    }
    for(const employee of employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
    }
}
solve(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);