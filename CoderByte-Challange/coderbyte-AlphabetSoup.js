/////////////////////////////////////////// Alphabet Soup //////////////////////////////////////////////////////////////////////

// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

export function AlphabetSoup(str) { 
    const arr=str.split("");
    const sortedArr=(arr.sort()).join("");
    // code goes here  
    return sortedArr; 
    // return str.split("").sort().join("") 
  }