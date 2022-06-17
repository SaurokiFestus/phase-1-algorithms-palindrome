function isPalindrome(word) {
  // Write your algorithm here

  const regEx = /[\W_]/g;
  const lowerCaseWord = word.toLowerCase().replace(reg, "");
  const pal = lowerCaseWord.split("").reverse().join();
  if (pal === lowerCaseWord){
    return true;
  }else{
    return false;
  }
}

isPalindrome("abba");

/* 
  Add your pseudocode here
  // function to check palindromes
  if word is palindrome
  return true
  else 
  return false
  call function palindrome
*/

/*
  Add written explanation of your solution here
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
