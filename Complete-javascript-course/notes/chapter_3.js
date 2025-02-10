// data manipulation

let example_sentence = 'this is a string'

let string_length = example_sentence.length 

//console.log("Value at the end of the string = ", example_sentence[2])

let combined_string = 'hello world' + ' ' + 'my name is court'

// const contains_the_letter_a = example_sentence.indexOf('a')

//console.log('sentence contains the letter ', contains_the_letter_a)

// const split_sentence = example_sentence.split('i')

const split_sentence = example_sentence.includes('z')

//includes check if its true or false
// replaceAll('_', ' ') takes the first argument then replace the string with the second arugment
// replace() will only replace the first string keep the rest of the string

//regex



// array and list

let simple_array = ['court', 'is', 'the', 'best']

//crud - create read update delete

//console.log(simple_array)

// simple_array[1] = 'Hello'
// 4 methods to manipulate an Array
// pop push shift unshift

simple_array.pop()
simple_array.push('new word')

let check = simple_array.join('_')

//console.log(check)

let simple_array_2 = [1,2,3,4,5,6,7]

//let index_of_three = simple_array_2.indexOf(3)
//let start_array_2 = simple_array_2.slice(0, //index_of_three)
//let end_array_2 = simple_array_2.slice//(index_of_three + 1)

//let new_filtered_array = start_array_2.concat//(end_array_2)
// concat joins two arrays
//console.log(new_filtered_array)


// dictionary or objects

const bio = {
  name: 'court',
  age: 33, 
  hobbies: ['coding', 'lighting', 'football']
}
let name_key = 'name'
bio[name_key] = 'donald'
 console.log(bio)

