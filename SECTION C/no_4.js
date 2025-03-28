function isPalindrome(word) {
    let j = word.length - 1; 

    for (let i = 0; i < word.length / 2; i++) { 
        if (word[i] !== word[j]) { 
            return false; 
        }
        j--; 
    }
    
    return true; 
}


let word1 = "racecar";
let word2 = "Rama";

console.log(isPalindrome(word1)); 
console.log(isPalindrome(word2)); 
