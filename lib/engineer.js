const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super(name, id, title, email);
        this.github = github;
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

    // Method to get developer github
    getGithub() {
        return this.github;
    };

    // Overridden to return 'Engineer'
    getRole() {
        return "Engineer";
    };

}

module.exports = Engineer;