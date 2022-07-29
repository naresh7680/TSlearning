// Parameter Properties
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.

// Example
class Person2 {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person2 = new Person2("Stepan");
console.log(person2.getName());

// output
// Stepan