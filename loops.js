
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



