/**
 * 
 * @class Person
 * 
 * OOP Learning outcome and knowledge unit
 * Abstraction
 * Encapsulation
 * Inheritance
 * Polymorphism
 * Method Overloading
 */
class Person {
	constructor(name, age, nationality) {
		this.name = name;
		this.age = age;
		this.nationality = nationality;

	/** Encapsulation is the process of hiding relevant data about
   * an object in order to reduce complexity and increase 
   * efficiency. It also protects the object from outside 
   * interference and misuse. This is done through the process of abstraction.
   */
  this.calculatePersonSalary = (workHours, dailyPay) => {
      const expectedWorkHours = 9;
      workHours > 9 ? 9 : workHours;

      totalHours = expectedWorkHours - workHours;
      actualSalary = (workHours * dailyPay) - (totalHours * dailyPay)

    return actualSalary;
  };
	}

 /**
  *
  * @param {String} employeeRole
  * 
  * @param {number} workHours
  * 
  * @returns {number} calculated salary
  * 
  * @memberof Person
  */
 getPersonSalary(employeeRole, workHours) {
		return this.calculateEmployeeSalary(employeeRole, workHours);
	}

	/** 
    Polymorphism - The ability of an object to take many forms.
    Here, the getName method is used to log a statement contains the person's name and nationality
  */
	getName() {
		return `My name is ${this.name} and i am from ${this.nationality}`;
	}


  /**
   *Method Overloading : Overloading in javascript is not possible but there are 
   * a number of ways something related can be acheived.
   *
   * @param {array} personRoles
   * 
   * @returns {string} address
   * 
   * @memberof Person
   */
  composeAddress(...personRoles) {
      for (const role of personRoles) {
        address = `Address is : ${Math.round(Math.random()*1000)}, folawiyo street, Lagos Mainland`;
        return address;
      }
  }
}


/**
 * Inheritance - Class Employee (Subclass) inherits from Person - SuperClass
 * Inheritance allows new objects to take the properties of existing objects. 
 * This is done by defining a base class from which other child classes can inherit object and 
 * properties from using in keyword extends
 *
 * @class Employee
 * 
 * @extends {Person}
 */
class Employee extends Person {
	employeeRoles = [
		{ title: 'manager', dailyPay: 2000 },
		{ title: 'technician', dailyPay: 1000 },
		{ title: 'cleaner', dailyPay: 500 },
	];

 /**
  *
  * @param {string} employeeRole
  * @param {number} hoursPerDay
  * 
  * @returns {object} salaryDetails
  * 
  * @memberof Employee
  */
 calculateEmployeeSalary(employeeRole, hoursPerDay) {
		let salaryDetail = {};
		for (const role of this.employeeRoles) {
			if (employeeRole === role['title']) {
				salaryDetail['pay'] =
					this.calculatePersonSalary(hoursPerDay, role['dailyPay']);
				salaryDetail['name'] = this.name;
			}
		}
		return salaryDetail;
	}

	/**
   *Polymorphism 
   * The ability of an object to take many forms
   * Here, the getName method is used to log a statement
   * contains the person's name, age and nationality
   *
   * @returns
   * @memberof Employee
   */
  getName() {
		return `My name is ${this.name}, i am ${this
			.age} years old and i am from ${this.nationality}->Yes i did it!`;
	}
}

const firstEmploy = new Employee('Mimie', 47, 'Nairobi');
const person = new Person('bright', 30, 'England');

// Check if method Polymorphism works
console.log('========>Polymorphism: Same function doing different things<========');
console.log(person.getName());
console.log(firstEmploy.getName());

//Method Overloading Here
console.log('========>Method Overloading: Same function based on arguments passed<========');
console.log(person.composeAddress('technician'));
console.log(person.composeAddress('technician', 'manager'));

// Check if Inheritance works
console.log('========Inheritance<========');
console.log(firstEmploy.getPersonSalary('manager', 9));
