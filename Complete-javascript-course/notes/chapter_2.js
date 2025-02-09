23424242343 // this is a number

'hello world' // this is a string of characters

true && false // these are booleans
let friends ={
  court: 'is super cool',
  rianne: 'is the best', 
  number_of_chickens: 7
}

let example_array = [1,2,4,5,7,9,34,76,87,567]
// console.log(example_array)

let is_true = true // could be false

function my_first_function(value, second_value) {
  // multiples * two numbers
  console.log(value != second_value)
}

// != not equal too 

let multiple_numbers = my_first_function

//multiple_numbers(9, 7)
//multiple_numbers(6,6)
//multiple_numbers(3,8)

// && AND || OR !

let condition_1 = true 
let condition_2 = false 
// console.log(typeof example_array)

if (condition_1 && condition_2) {
  console.log(' hi court')
} else if (condition_1 || condition_2) {
console.log('one of the conditon of the two was true ')
} else {
  console.log('the value was false so we are here')
}


let example_array_2 =[1,2,3,4,5,6,7,8,9,56,456]

let i = 0 
let length = example_array_2.length
console.log(length)
//while(i < length) {
//console.log('value was true: ', i,example_array_2[i])
//i = i + 1 
//}

//for (let j = 0; j < length; j = j + 1) {
 // console.log('value was true: ', j,example_array_2[j])
//}



function add_strings (string1, string2 ){
  let concat_string = string1 + '' + string2
  console.log(concat_string)
}

add_strings('hello', 'court')