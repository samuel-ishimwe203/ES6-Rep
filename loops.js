
// for loop in object to access using array to access index
const obj ={
    name: 'samuel',
    age:23,
    address:'kigali'
}

const array = [1,3,4,5,6]
const objArr =Object.keys(obj)
console.log(objArr)
for(let i=0; i<objArr.length;i++){
   console.log(objArr[i])
   console.log(obj[objArr[i]])
}


// what is output of Object.entries

const obj2 ={
    name:'mucyo',
    age:24,
    address:'Nyagatare'
}

const objArra = Object.entries(obj2)
console.log(objArra)
console.log(objArra[0][1])
 
// what is output of Object.values

const obj3 ={
    name:'mucyo',
    age:24,
    address:'Nyagatare'
}

const objArray = Object.values(obj3)
console.log(objArray)
