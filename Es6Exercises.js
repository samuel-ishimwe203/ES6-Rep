// write arrow function that takes multiplies each element in an array by 2

const multEachArrayEle=(array)=>{

    const result = array.map(num=>num*2)
    return result

}

console.log(multEachArrayEle([1,3,4,5,6]))

