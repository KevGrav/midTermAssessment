// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
const ageToAbilities = (age) => {
    if (age < 16) {
      return 'You can\'t drive.';
    }else if (16 <= age <= 17){
      return 'You can drive but not vote.';
    }else if (18 <= age <= 24){
      return 'You can vote but not rent a car.';
    }else if (age >= 25){
      return 'You can do pretty much anything.';
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
        result = i;
        break;
      }
    }
    return result;
}

const getPlaces = (arr, num) => {
    let result = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i].length < num){
        result.push(arr[i]);
      }

    }
    return result;
}
    
const addToObj = (obj, key, value) => {
    obj[key] = value;
    return obj;
}
        
const duplicateElements = (arr) => {  
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
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
