const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        super(name, id, title, email);
        this.school = school;
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

    getSchool() {
        return this.school;
    };

    // Overridden to return 'Intern'
    getRole() {
        return 'Intern';
    };


}

module.exports = Intern;