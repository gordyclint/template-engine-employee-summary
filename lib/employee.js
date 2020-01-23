var count = 1;
function Employee (name, title, email) {

    this.name = name;
    this.id = count++;
    this.title = title;
    this.email = email;
    
    this.getName = function () {
        return this.name;
    }
    this.getId = function () {
        return this.id;
    }
    this.getEmail = function () {
        return this.email;
    }
    this.getTitle = function () {
        return this.title;
    } // Returns 'Employee' 
}
 
module.exports = Employee;