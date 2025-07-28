// write arrow function that takes multiplies each element in an array by 2

const multEachArrayEle=(array)=>{

    const result = array.map(num=>num*2)
    return result

}

console.log(multEachArrayEle([1,3,4,5,6]))

// Template literals challenge give an {name: 'samue', age:25},return string //"My name is Samuel and I am 25 years old"


const template={name:'samuel',age:25}
console.log(`My name is ${template.name} and I am ${template.age} year `)