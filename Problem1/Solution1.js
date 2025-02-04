const CountTheCharacters = (str) =>{

    const charCount = {};

    for (const char of str.toUpperCase()) {
        if(char === " "){
        }
        else{
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    return charCount

}

console.log(CountTheCharacters("Amolya Sharma"));
console.log(CountTheCharacters('Chinmay Kulkarni'))