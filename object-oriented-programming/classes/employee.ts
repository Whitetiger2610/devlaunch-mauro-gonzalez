class Employee{

    constructor(
        public _firstName: string,
        public _lastName: string,
        private _salary: number
      ){
      this._firstName = _firstName
      this._lastName = _lastName
      this._salary = _salary
    }
    get salary(){
        return this._salary
    }
    set salary(newSalary:number) {

        newSalary > 0 ? this._salary = newSalary : console.log("New salary must be positive")
    }

    giveRaise(increase:number){
        const increasedSalary = this._salary += increase
        this._salary = increasedSalary
        return this._salary
    }
}

const e1 = new Employee('Mauricio', 'Gonzalez',18000)
console.log('Salary History - Employee: ', e1._lastName,',',e1._firstName)
console.log('---------------')
console.log('current Salary $',e1.salary)
e1.salary = 20000
console.log('New Salary $',e1.salary)
e1.giveRaise(2000)
console.log('Increased Salary $',e1.salary)