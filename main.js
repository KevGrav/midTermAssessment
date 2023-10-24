// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
// const ageToAbilities = (age) => {
//     if (age < 16) {
//       return 'You can\'t drive.';
//     }else if (16 <= age <= 17){
//       return 'You can drive but not vote.';
//     }else if (18 <= age <= 24){
//       return 'You can vote but not rent a car.';
//     }else if (age >= 25){
//       return 'You can do pretty much anything.';
//     }
// }
function ageToAbilities(age){
  switch(true){
      case age < 16: 
          return "You can't drive."
      case age <= 17 && age >= 16:
          return "You can drive but not vote."
      case age <= 24 && age >= 18:
          return "You can vote but not rent a car."
      case age >= 25:
          return "You can do pretty much anything."
      default: break;
  }
}

const oddIndices = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++){
      if (i % 2 !== 0){
        result.push(arr[i]);
      }
    }
    return result;
} 

const numOddValues = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 !== 0){
        result++;
      }
    }
    return result;
}

const averageStringLength = (arr) => {
  if(arr.length === 0){
    return 0
  }  
  let result = 0;
    for (let i = 0; i < arr.length; i++){
      result += arr[i].length;
    }
    return result / arr.length;
}

const firstPunctuationIndex = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i++){
      if (str[i] === '.' || str[i] === '?' || str[i] === '!'){
        return i;
    }
    }
    return -1;
}

// const getPlaces = (arr, num) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++){
//       if (arr[i].length < num){
//         result.push(arr[i]);
//       }

//     }
//     return result;
// }
function getPlace(arr, newScore){
  let place = (arr.length + 1).toString()
  for(let i = 0; i < arr.length; i++){
    if(newScore > arr[i]){
      place = (i + 1).toString()
      break;
    }
  }
  if(place[place.length - 1] === '1'){
    return place + 'st place'
  }else if(place[place.length - 1] === '2'){
    return place + 'nd place'
  }else if(place[place.length - 1] === '3'){
    return place + 'rd place'
  }else{
    return place + 'th place'
  }
}


const addToObj = (obj, key, value) => {
  if(typeof key !== 'string'){
    return 'Function must be called with a valid key.'
  }  
  obj[key] = value;
}
        
const duplicateElements = (arr) => {  
  let obj = {}  
  let result = [];
    for (let i = 0; i < arr.length; i++){
      if(obj[arr[i]] === undefined){
        obj[arr[i]] = 1
      }else if(obj[arr[i]] === 1){
        obj[arr[i]] += 1
        result.push(arr[i])
      }else{
        continue;
      }
    }
    return result
}
    

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};
