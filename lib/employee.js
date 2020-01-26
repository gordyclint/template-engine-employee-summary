class Employee {
    constructor(name, id, title, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }

    getName() {
        return this.name;
    };
    
    getID() {
        return this.id;
    };

    getEmail() {
        return this.email;

    };

    getRole() {
        return "Employee";
    };
    
}

// const employee = new Employee(Clint, 1, )
module.exports = Employee;