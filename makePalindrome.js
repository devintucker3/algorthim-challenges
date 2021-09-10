function makePalindrome(word) {
    console.log(word);

    let arr = word.split("");
    let backwardsArr = [];

    for (let letter of arr) {
        backwardsArr.unshift(letter);
    }
    console.log(backwardsArr);

    let newPalindrome = [];

    for (let letter of backwardsArr) {
        if (letter !== arr[0]) {
            newPalindrome.push(letter);
        }
    }

    for (letter of arr) {
        newPalindrome.push(letter)
    }
    
    console.log(newPalindrome);

    let palindrome = newPalindrome.join("");

    console.log(palindrome);
}

makePalindrome("racer");