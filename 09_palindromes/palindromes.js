const palindromes = function (word) {
    let clean = [...word.toLowerCase()].filter(letter => /[a-z]/.test(letter));
    let cleanStr = clean.join('');
    let cleanRev = clean.reverse().join('');
    return (cleanStr == cleanRev) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
