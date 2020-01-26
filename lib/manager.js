const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, title, email);
        this.officeNumber = officeNumber;
    };

    getName() {
        return this.name;
    };

    getID() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    // Overridden to return 'Manager'
    getRole() {
        return 'Manager';
    };

}

module.exports = Manager;