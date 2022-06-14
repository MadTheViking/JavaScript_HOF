console.log("Hello World!\n==========\n");

function plus(num){
   return function (){
        return num + plusNumber();
    };
}

//const plus2 = plus(2);

//console.log(plus2(2));
//console.log(plus2(100));

console.log("EXERCISE 1:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];


  users.forEach(user => console.log(user.name))

  //exercise3


let newUser = users.map((user) => {
    return { name: user.name, score: user.score };
});
console.log(newUser)

//escierse 4

//let activeUsers = users.filiter((user) => user.isActive);

//console.log(activeUsers);
users.sort((a, b) => b.score - a.score);


console.log(users)