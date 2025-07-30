// function that reverse each word in string
function reverseWords(str){
    const array= str.split('').reverse().join('')
    const result = array.split(' ').reverse().join(' ')
    return result
}

console.log(reverseWords('hello world my ghee'))