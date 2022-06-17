function isPalindrome(word) {
  // inbuilt functions(split,reverse,join)
  const stringCheck = word.split('').reverse().join('');
  if(word === stringCheck){
    return true;
  }else{
    return false;
  }
}

/* 
  The function should return true is the string passed is a palindrome. Return false if its not.
*/

/*
Used in-built functions. First split the text into individual characters using split(). Second, reverse the arrangement of characters using reverse(). Third, join the split and reversed character to form a letter similar to the original input if true. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
