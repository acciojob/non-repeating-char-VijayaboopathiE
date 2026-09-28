function firstNonRepeatedChar(str) {
 // Write your code here
	 if (str === "") {
        return null;
    }

    const count = {};

    // Count each character
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    // Find the first character that occurs once
    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
