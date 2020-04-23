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
}