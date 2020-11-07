class EmployeePayrollData{

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)){
            this._name = name;
        } 
        else throw 'Name is incorrect';
    }

    get id() {
        return this._id;
    }

    set id(id){
        let idRegex = RegExp('^[1-9]{1,}[0-9]{0,}$');
        if(idRegex.test(id)){
            this._id = id;
        }
        else throw 'Id is incorrect';
    }
    
    get salary() {
        return this._salary;
    }

    set salary(salary){
        let salaryRegex = RegExp('^[1-9]{1}[0-9]{0,}$');
        if(salaryRegex.test(salary)){
            this._salary = salary;
        }
        else throw 'Salary is incorrect';
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        if (this._gender === undefined) {
            this._gender = "m";
        } else {
            let genderRegex = RegExp('^[a-zA-Z]{1}$');
            if (genderRegex.test(gender)) this._gender = gender;
            else throw 'Gender is incorrect';
        }
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id: " + this.id + ", name: " + this.name + ", salary: " + this.salary + ", gender: "
            + this.gender + ", startDate: " + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());

employeePayrollData = new EmployeePayrollData(2, "Jeff", 40000, "M", new Date());
console.log(employeePayrollData.toString());

try {
    employeePayrollData.name = "John";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    employeePayrollData.id = 10;
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    employeePayrollData.salary = 60000;
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    employeePayrollData.gender = "f";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}


