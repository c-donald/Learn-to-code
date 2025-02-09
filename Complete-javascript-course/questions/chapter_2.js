// 1. Define a variable called name and set it equal to a string that contains your name. Then, demo how you would change its value to your full name. 

let name = "court"
console.log(name)

name = 'Court Donald'

var_a = 2
var_b = 3

console.log(var_a === var_b)

let age = 8
//let adult_age = 18

if (age > 18) {
 console.log('Adult')
} else {
  console.log('Minor')
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
let array_length = numbers.length
for (let i = 0; i < array_length; i = i + 1 ) {
  let current_value = numbers[i]
  let is_even = current_value % 2 === 0
  if (is_even){
    console.log(current_value)

  }
  //console.log('even numbers:',i ,i % 2 === 0)
}

let array_numbers = [2,4,23,27,36,48,50,66]

let sum = 0
let i = 0


while (sum < 100) {
  let new_current_value = array_numbers[i]
  sum = sum + new_current_value
  i = i + 1
}

console.log(sum)

function calculate_area(width, height){
  let area = width * height
  return area 
}

let area_one = calculate_area(9, 10)
let area_two = calculate_area(45, 86)
console.log('the calculate area is: ', area_one)
console.log('the calculate area is: ', area_two)
