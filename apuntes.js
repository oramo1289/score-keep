// class Person {
//   constructor(name = 'Anonimo', lastName = 'No hay', age = 0) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   getGreetings(){
//     return `hi ${this.name}, your last name is ${this.lastName}`;
//   }
//   getDescription(){
//     return `${this.name} ${this.lastName} is ${this.age} years old `;
//   }
// }
//
// class Programmer extends Person {
// constructor(name, lastName, age, preferredLanguage = 'assembly') {
//   super(name, lastName, age)
//   this.preferredLanguage = preferredLanguage;
// }
// getDescription(){
//   return `${this.name} ${this.lastName} is ${this.age} years old and my favourite language is ${this.preferredLanguage}`;
// }
// }
//
// let yo = new Programmer('Oscar', 'Ramo', 27);
// console.log(yo.getGreetings());
// console.log(yo.getDescription());
