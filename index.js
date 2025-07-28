// destructuring 

function greet([first , second]){
    console.log(first,second)
}
greet([300, 400, 450])
greet([300, 400, 450])

// for...of loop it iterates over values of iterable(like array, string , maps ,set etc)

// for array nested


const matrix=[[1,2],[3,4],[5,6]]

for(const arr of matrix){
    for(const value of arr){
        console.log(value)

    }

}

   