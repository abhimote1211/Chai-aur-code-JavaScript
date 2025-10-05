const name = "Abhishek";
const repoCount = 8;

//console.log(name + repoCount + " Value "); //Abhishek8

console.log(`hello my name is ${name} amd my repo count is ${repoCount}`);

const gameName = new String("Chess-Cricket"); //not recommended
console.log(gameName);
console.log(typeof gameName); //object

console.log(gameName[0]);
console.log(gameName.__proto__); //all string methods

console.log(gameName.length); //5
console.log(gameName.toUpperCase()); //CHESS
console.log(gameName.toLowerCase()); //chess
console.log(gameName.charAt(1)); //C
console.log(gameName.indexOf("s")); //2


// string methods

// toUpperCase(), toLowerCase(), charAt(), indexOf(), lastIndexOf()
//  includes(), slice(), substring(), substr()
//  replace(), trim(), split(), concat(), repeat()

const newString = gameName.substring(0,4);
console.log(newString); // Ches (4 not included)

const anotherString = gameName.slice(-8,4);
console.log(anotherString); // Ches (4 not included)

const newString1 = "    Abhishek     ";
console.log(newString1);
console.log(newString1.trim()); //Abhishek

const url = "https://www.youtube.com/watch?abhishek%20%mote";
console.log(url.replace('%20%', '-'));

console.log(url.includes('abhi')); //true

console.log(gameName.split('-')); //['Chess', 'Cricket']
