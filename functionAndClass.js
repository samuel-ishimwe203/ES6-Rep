

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


// function that passed object as orguments

function greet({floors=1 , color='red' , walls='bricks'}={}){
    console.log(`your house has ${floors} floor with ${color} ${walls} wall`)
}
greet()

// class 

class person{
    constructor(name, age){
        this.name=name,
        this.age=age
    }

    greet(){
        console.log(`Hy my name is ${this.name} and i have ${this.age} years old`)
    }
}

const newClass =new person('samuel',22)
newClass.greet()

