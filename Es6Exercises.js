// write arrow function that takes multiplies each element in an array by 2

const multEachArrayEle=(array)=>{

    const result = array.map(num=>num*2)
    return result

}

console.log(multEachArrayEle([1,3,4,5,6]))

// Template literals challenge give an {name: 'samue', age:25},return string //"My name is Samuel and I am 25 years old"


const template={name:'samuel',age:25}
console.log(`My name is ${template.name} and I am ${template.age} year `)

// Give a user object with nested properties , use destructuring to extract specific values like email , and city

 const obj={
       name:'samuel',
       location:'kigali',
       email:'samuel@gmail.com',
       city:'Nyagatare'
 }

 const {name ,email,city}=obj
 console.log([name,email,city,])

 // swap the values of two variables using array destructuring

let val1 = 6;
let val2 = 5;

console.log("Before:");
console.log("val1 =", val1);
console.log("val2 =", val2); 

[val1, val2] = [val2, val1];

console.log("After:");
console.log("val1 =", val1); 
console.log("val2 =", val2); 







