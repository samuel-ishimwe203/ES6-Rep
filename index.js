
// for...of loop it iterates over values of iterable(like array, string , maps ,set etc)

// for array nested


const matrix=[[1,2],[3,4],[5,6]]

for(const arr of matrix){
    for(const value of arr){
        console.log(value)

    }

}


const myMap = new Map([
  ["name", "Ishimwe"],
  ["age", 22],
  ["country", "Rwanda"]
]);

for (const [key, value] of myMap) {
  console.log(`${key} => ${value}`);
}



function sum(){
  let total=0
  for(const argument of arguments){
    total+=argument
  }
  return total
}

console.log(sum(1,2,3,4,5,6))



function negPos(arr){
    const array=arr.filter(num=>num>0)
    const arra=arr.filter(num=>num<0)
    
    const sumOfPos=array.reduce((acc,curr)=>acc+curr,-1)
    const subtractNeg=arra.reduce((acc,curr)=>acc*curr)
    
    const finalResult= [sumOfPos,subtractNeg]
    
    return finalResult
    
    
}

console.log(negPos([-3,-4,-2,1,3,4]))


// reverse the last word of your words

function greet(str){
    
    const arr=str.split(' ')
    const array = arr.slice(-1).join('')
    
    const result= arr.slice(0,3).join(' ')
    const  result2= array.split('').reverse().join('')
    
    return [result , result2].join(' ')
   
    
    }

console.log(greet('I love JavaScript programming'))

// function that takes an number of arguments and return the sum using rest parameter

  function Greeting(...number){
     
    return number.reduce((acc,curr)=>acc+curr,0)

  }

  console.log(Greeting(4,5,4,3,2))
   console.log(Greeting(1,2,3,4,5,6,7,8,9))
    console.log(Greeting())

   