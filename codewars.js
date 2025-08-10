// function that reverse each word in string
function reverseWords(str){
    const array= str.split('').reverse().join('')
    const result = array.split(' ').reverse().join(' ')
    return result
}

console.log(reverseWords('hello world my ghee'))


// Calculating with Functions

function zero(number) {
  return number? number(0):0
}
function one(number) {
    return number? number(1):1
}
function two(number) {
    return number? number(2):2
}
function three(number) {
    return number? number(3):3
}
function four(number) {
    return number? number(4):4
}
function five(number) {
     return number? number(5):5
}
function six(number) {
    return number? number(6):6
}
function seven(number) {
    return number? number(7):7
}
function eight(number) {
    return number? number(8):8
}
function nine(number) {
    return number? number(9):9
}



function plus(num1) {
    return function(num2){
        return num2+num1
    }
   
}
function minus(num1) {
    return function(num2){
        return num2-num1
    }
   
}


function times(num1) {
    return function(num2){
        return num2*num1
    }
   
}

function dividedBy(num1) {
    return function(num2){
        return Math.floor(num2/num1)
    }
   
}

console.log(seven(dividedBy(five())))


// merge two sorted array

function sortedArray(arr1,arr2){
    const array1=arr1.sort((a,b)=>a-b)
    const array2=arr2.sort((a,b)=>a-b)
    return [...array1,...array2]
}
console.log(sortedArray([5,1,2,3,4],[8,7,9]))