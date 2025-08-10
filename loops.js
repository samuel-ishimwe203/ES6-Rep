
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


// for in access object's property and array's index

const obj4 ={
    name:'Hirwa',
    age:25,
    address: 'kigali'
}

for(let ind in obj4){
    console.log(obj4[ind])
}

const ar=[1,3,4,5,6]
for(let ind in ar){
    console.log(ind)
}

// for of used in array to access values of array

const array4=[9,8,4,3,1]
for(let values of array4){
    console.log(values)
}


// To insert symbol to index position 2 of string

function greet(string, symbol){

    const array = string.split(' ').map((ele,ind)=>ele.split('').map((ele,ind)=>ind==2 ?`${ele} ${symbol}`:ele).join("")).join(' ')
    return array

}
console.log(greet('my name is samuel ishimwe I am from Rwanda Nyagatare and I am 22 years old','*'))
