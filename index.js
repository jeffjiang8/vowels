function vowels(str) {
    let count = 0
    const letters = 'aeiou' 
    // or const letters = ['a', 'e', 'i', 'o', 'u']
    for (let char of str.toLowerCase()) {
        if (letters.includes(char)) {
            count ++
        }
    }
    return count

    // const matches = str.match(/[aeiou]/gi)
    // // g => make sure the function doesn't stop after finding the first one, i => insensitive
    // // match will return 'null' or an array of matches
    // return matches ? matches.length : 0
}