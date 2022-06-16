class Person {
    name: string;
    protected age: number;
    private mail: string;
    constructor(name: string, age: number, mail: string) {
      this.name = name;
      this.age = age;
      this.mail = mail
    }

    getEmail(){
      return `${this.mail}`
    }
  }
  
  class Student extends Person {
    private regular: boolean;
    
    constructor(name: string, age: number, regular: boolean,mail: string) {
      super(name, age, mail);
      this.regular = regular;
    }
    
    getFullInfo() {
      return `${this.name} (${this.age} years old) - ${this.regular ? 'regular' : 'not regular'}`;
    }
  }
  
  const student = new Student("Franco", 26, true, 'hola');
  
  student.getFullInfo(); // "Franco (26 years old) - not regular"
  console.log(student.name); // Property 'name' is protected and only accessible within class 'Person' and its subclasses
  student.age; // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
  student.regular; // Property 'regular' is private and only accessible within class 'Student'

//proba como cambiar los modificadores de atributos de la clase!
  export {}