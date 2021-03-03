let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
let upperCase = quoteString.toUpperCase();
console.log(`Upper case string is: ${upperCase}`)

let authorString = "- Henry Ford"
let completeString = quoteString.concat(authorString);
console.log(`Concatenated string is: ${completeString}`);

let found = completeString.includes("Henry");
if (true)
    console.log("Henry was in completeString")
else
    console.log("Henry was NOT in completeString")