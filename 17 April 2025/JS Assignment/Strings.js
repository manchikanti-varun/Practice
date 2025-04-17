/* ○	Question: Write a function findLongestPalindrome(str) that takes a string str as input and returns the longest
 palindromic substring within it. A palindrome is a string that reads the same forwards and backward (e.g., "racecar",
"madam"). This will require you to efficiently check for palindromes within the string.*/

function checkPal(s, low, high) {
    while (low < high) {
        if (s[low] !== s[high])
            return false;
        low++;
        high--;
    }
    return true;
}
function longestPalindrome(s) {
    const n = s.length;
    let maxLen = 1, start = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (checkPal(s, i, j) && (j - i + 1) > maxLen) {
                start = i;
                maxLen = j - i + 1;
            }
        }
    }
    return s.substring(start, start + maxLen);
}

console.log(longestPalindrome("varunnurav"));
console.log(longestPalindrome("varunnnnnu"));