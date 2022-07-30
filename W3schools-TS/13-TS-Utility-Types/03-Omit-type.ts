// Omit removes keys from an object type.

// Example
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Naresh'
  // `Omit` has removed age and location from the type and they can't be defined here
};
console.log(bob);

// output
// { name: 'Naresh' }