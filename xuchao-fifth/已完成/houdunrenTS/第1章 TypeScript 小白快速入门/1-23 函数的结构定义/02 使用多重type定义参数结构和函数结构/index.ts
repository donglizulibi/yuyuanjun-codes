type userType = { name: string; age: number };
type addFunc = (u: userType) => boolean;

let addUser: addFunc = (user: userType) => {
  console.log(user);
  return true;
};

console.log(addUser({name:'haha',age:19}))