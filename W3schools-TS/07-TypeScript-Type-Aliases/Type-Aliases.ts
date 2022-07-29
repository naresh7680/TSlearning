
// Try creating a new User using the alias provided
type UserId = number;
type UserName = string;
type UserGender = string;
type User = {
  id: UserId,
  name: UserName,
  gender: UserGender
};

const userId: UserId = 2022
const userName: UserName = "Naresh"
const userGender: UserGender = "Male"
const user: User = {
  id: userId,
  name: userName,
  gender: userGender
};

console.log(user);

// output
// { year: 2022, type: 'Naresh', model: 'Male' }