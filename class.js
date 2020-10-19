class Student {
  // the parameters in constructor reflects the arguments passed when the class is instantuated
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // adding a method to the instance of the class
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  // static is a method of a class that is NOT tied to an instance of the class
  static alarm() {
    return 'ALERT!'
  }
}

let testStudent = new Student('pete', 'tee');
console.log(testStudent)  // ===> we get the string 'pete tee'
console.log(Student.alarm()) // ===> we get 'ALERT'