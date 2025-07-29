

const defaul= (name='John doe',Greeting='Welcome')=>{
    return `${Greeting} ${name}`

}

console.log(defaul())
console.log(defaul('bite se','mucyo'))

// nested object destructuring


const user ={
    name:'samuel',
    score:{
        math:50 ,
         Englis:70
        }
}

const {
    score:{math ,Englis}
} = user

console.log(math)
console.log(Englis)


