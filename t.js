const math = require("./math")


console.log(math.add(10, 5));
console.log(math.subtract(10, 5));


const user = {
      id:1,
      name:"Hacker",
      age:20,
      role:"Admin"
}

console.log(user.name);
console.log(user.role);


//=========================



//-------------------------//#endregion

const users = ["ali" , "Ahmed" , "Yasser"]

for (let user of users ){
  console.log(user);

}


//==================
const result = users.map((user) => {
        return user.toUpperCase();

});

console.log(result);


//================

const users_2 = [
    { name: "Ali", age: 17 },
    { name: "Ahmed", age: 22 },
    { name: "Yasser", age: 20 },
    { name:"Hacker" , age:1000},
];

const adults = users_2.filter((user) => user.age >= 18 );
const find = users_2.find((user) => users_2.name == "Hacker")
console.log(adults);


//=====

const user_5 = {
    name: "Yasser",
    age: 20
};

const updatedUser = {
    ...user,
    role: "admin"
};

console.log(updatedUser);

//======================
