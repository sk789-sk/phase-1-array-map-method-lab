const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//We take the tutorial and iterate over it 1 string at a time.
//Break each individual string at the space to get an individual word and turn it into an array
//Capitalize the first letter in each value in the array 
// Combine the values in the array into a string 
// Replace or create a new array with all the tutorials, not sure which they wanted. 

function titleCasedLoop(array){
  newArr = [] //want a new array and not an updated array
  for (let idx in array){ //iterate over each tutorial
    tName = array[idx]    //gets the tutorial string
    let wordArray = tName.split(" ")      //split the tutorial string into an array containing each word
    for (let idx2 in wordArray){      //loop over each word in the tutorial name
      wordArray[idx2]  = wordArray[idx2][0].toUpperCase() + wordArray[idx2].slice(1) //Capatilize first letter in each word
    }
    let capString = wordArray.join(" ") //turn the array back into a capatilized string
    //array[idx] = capString       //dont update 
    newArr.push(capString)       //add the capatilized string into the output
  } return newArr
}

// titleCasedLoop(tutorials)


//The core of the loop above is taking a string and making it capital. the capitalizer function does that for us

function capitalizer(string){ //takes a string and makes it capital now
  let wordArray = string.split(" ")
  for (let idx in wordArray){
    wordArray[idx] = wordArray[idx][0].toUpperCase() + wordArray[idx].slice(1) //uppercases the word
  }
  let capString = wordArray.join(" ")
  return capString
} 

//console.log(capitalizer("Hi this is a test"))

// Use Map to feed the strings into from tutorials

function titleCased(){
  return tutorials.map(capitalizer)
}
