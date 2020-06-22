// TODO: Write code to define and export the Employee class
class Employee{
    constructor(options){
        this.name = options.name
        this.id = options.id
        this.email = options.email
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return this.constructor.name
    }
}

module.exports = Employee;