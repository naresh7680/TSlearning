interface Person {
    name: string;
    age: number;
    location?: string;
  }
              
  const bob1: Pick<Person, 'name'> = {
    name: 'Stepan' // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
  };
  
  console.log(bob1);

//   putput
// { name: 'Stepan' }