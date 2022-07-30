interface Person {
    name: string;
    age: number;
    // gender: string;
  }
  
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }
  
  let person = {
    name: "Lalith",
    age: 27
    // gender: "Male"
  };
  printPersonProperty(person, "name");	// Printing person property name: "Naresh"
  printPersonProperty(person, "age");		// Printing person property name: "27"
//   printPersonProperty(person, "gender"); // Printing person property name: "Male"

// output
// Printing person property name: "Lalith"
// Printing person property age: "27"
// Printing person property gender: "Male"