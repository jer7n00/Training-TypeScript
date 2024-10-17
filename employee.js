var Employee = /** @class */ (function () {
    function Employee(emp_id, emp_name, emp_dep, emp_isActive, emp_joinDate) {
        if (Employee.empIds.has(emp_id)) {
            throw new Error("Employee id ".concat(emp_id, " is already in use"));
        }
        ;
        this.emp_id = emp_id;
        this.emp_dep = emp_dep;
        this.emp_name = emp_name;
        this.emp_isActive = emp_isActive; // Assign the value
        this.emp_joinDate = emp_joinDate;
        Employee.empIds.add(emp_id);
        Employee.employees.push(this);
    }
    Employee.displayEmployees = function () {
        if (Employee.employees.length === 0) {
            console.log("No employees found.");
            return;
        }
        console.log("Employee List:");
        Employee.employees.forEach(function (emp) {
            console.log("ID: ".concat(emp.emp_id, ", Name: ").concat(emp.emp_name, ",  Active: ").concat(emp.emp_isActive, ", Department: ").concat(emp.emp_dep, ", Join Date: ").concat(emp.emp_joinDate.toISOString().split('T')[0]));
        });
    };
    Employee.empIds = new Set();
    Employee.employees = [];
    return Employee;
}());
// Example of creating employee objects
try {
    var employee1 = new Employee(101, "Alice Smith", "Engineering", true, new Date("2023-01-15"));
    var employee2 = new Employee(102, "Bob Johnson", "Marketing", true, new Date("2023-02-01"));
}
catch (error) {
    console.error(error.message); // Output: Employee ID 101 is already in use.
}
Employee.displayEmployees();
