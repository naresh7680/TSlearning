// Readonly
// Similar to arrays, the readonly keyword can prevent class members from being changed.

// Example
class Person3 {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person3 = new Person3("John");
console.log(person3.getName());

// output
// John