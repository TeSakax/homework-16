// 1. (functionebს როავხსნით უკეთესად გავიგებ ამას)
let numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < numbers.length; i++ ) {
  sum += numbers[i];
}

console.log(sum) 

// 2

let newArray = [{
    name : "Guga",
    age: "25",
    address: "Tbilisi",
},
{
    name : "Oto",
    age: "20",
    address: "Rustavi",
},
    {
    name : "Nino",
    age: "45",
    address: "Gori",
    }
]
// 3

console.log(`My name is ${newArray[0].name}`)

// 4

if (newArray[1].age < 19) {
   console.log(`I'm a tennager `);
  } else {
   console.log(`i'm an adult`);
  }

// 5 
