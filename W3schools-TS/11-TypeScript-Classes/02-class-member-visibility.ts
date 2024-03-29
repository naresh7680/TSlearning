// Members: Visibility
// Class members also be given special modifiers which affect visibility.

// There are three main visibility modifiers in TypeScript.

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Person1 {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person1 = new Person1("Naresh");
  
  console.log(person1.getName()); // person.name isn't accessible from outside the class since it's private

//   output
// Naresh