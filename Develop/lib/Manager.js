// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(options){
        super(options)
        this.officeNumber = options.officeNumber
    }   
    getOfficeNumber(){
        return this.officeNumber
    }
}
module.exports = Manager;