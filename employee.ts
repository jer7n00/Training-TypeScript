class Employee{
    emp_id:number;
    emp_name:string;
    emp_dep:string;
    emp_isActive:boolean;
    emp_joinDate:Date;
    emp_salary:number;
    static empIds: Set<number> = new Set();
    static employees: Employee[] = []; 

    constructor(
        emp_id:number,
        emp_name:string,
        emp_dep:string,
        emp_isActive:boolean,
        emp_joinDate:Date,
        emp_salary:number

    )
    {
        if(Employee.empIds.has(emp_id)){throw new Error(`Employee id ${emp_id} is already in use`)};
        this.emp_id=emp_id;
        this.emp_dep=emp_dep;
        this.emp_name=emp_name;
        this.emp_isActive = emp_isActive; // Assign the value
        this.emp_joinDate = emp_joinDate;
        this.emp_salary=emp_salary;
        Employee.empIds.add(emp_id);
        Employee.employees.push(this);
    }

    static displayEmployees(): void {
        if (Employee.employees.length === 0) {
            console.log("No employees found.");
            return;
        }

        console.log("Employee List:");
        Employee.employees.forEach(emp => {
            console.log(`ID: ${emp.emp_id}, Name: ${emp.emp_name},  Active: ${emp.emp_isActive}, Department: ${emp.emp_dep}, Join Date: ${emp.emp_joinDate.toISOString().split('T')[0]}`);
        });
    }

    static getEmployeesByDepartment(dep: string): void {
        const employeesInDepartment = Employee.employees.filter(emp => emp.emp_dep === dep);
        
        if (employeesInDepartment.length === 0) {
            console.log(`No employees found in department: ${dep}`);
        } else {
            console.log(`Employees in Department "${dep}":`);
            employeesInDepartment.forEach(emp => {
                console.log(`ID: ${emp.emp_id}, Name: ${emp.emp_name}, Salary: ${emp.emp_salary}`);
            });
        }
    }

    static getEmployeesBySalary(Salary: number): void {
        const employeesBySalary = Employee.employees.filter(emp => emp.emp_salary === Salary);
        
        if (employeesBySalary.length === 0) {
            console.log(`No employees found with salary  equal to: ${Salary}`);
        } else {
            console.log(`Employees with Salary = ${Salary}:`);
            employeesBySalary.forEach(emp => {
                console.log(`ID: ${emp.emp_id}, Name: ${emp.emp_name}, Salary: ${emp.emp_salary}, Department: ${emp.emp_dep}`);
            });
        }
    }



}

// Example of creating employee objects
try {
    const employee1 = new Employee(
        101,
        "Alice Smith",
     
        "Engineering",
        true,
        
        new Date("2023-01-15"),
        50000
    );

    const employee2 = new Employee(
        102,
        "Bob Johnson",
        "Marketing",
        true,
       
        new Date("2023-02-01"),
        40000
    );

} catch (error) {
    console.error(error.message); // Output: Employee ID 101 is already in use.
}

Employee.displayEmployees();