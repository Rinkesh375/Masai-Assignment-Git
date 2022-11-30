let str = 'racecar'
let start = 0
let end = str.length-1
let palindrome = true
while (start<=end) {
    if(str[start] !== str[end]){
        palindrome = false
        break;
    }
    start++
    end--
}
console.log(palindrome)