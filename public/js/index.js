// Sum Up the Day in 5 Words Daily (CAP) //

//5Ws

//newFormat = [Who, What, When, Where, why, optional How]

// give users the option to ignore certain words
ignoredWords = [
  "i",
  "they",
  "you",
  "the",
  "a",
  "me",
  "today",
  "an",
  "so",
  "because",
  "and",
  "last",
  "now",
  "but",
  "yet",
  "do",
  "don't",
  "however",
  "can",
  "can't",
  "not",
  "should",
  "would",
  "could",
  "maybe"
];

// function to add to the ignoredWords list
function addIgnoredWord(word) {
  console.log("Before : ", ignoredWords);
  if (!ignoredWords.includes(word)) {
    word = word.toLowerCase();
    ignoredWords.push(word);
    console.log("Nice! You added: ", word);
  } else {
    console.log("Woops! That word is already ignored.");
  }
  console.log("After : ", ignoredWords);
}

// function to remove to the ignoredWords list
function removeIgnoredWord(word) {
  console.log("Before : ", ignoredWords);

  if (!ignoredWords.includes(word)) {
    console.log("Woops! That word isn't ingored yet.");
  } else {
    word = word.toLowerCase();
    const wordIndex = ignoredWords.indexOf(word);
    const removedWord = ignoredWords.splice(wordIndex);
    console.log("Nice! You removed: ", removedWord);
  }

  console.log("After : ", ignoredWords);
}

//addIgnoredWord("maybe");
//removeIgnoredWord("maybe");

// create a database
let myDatabase = {};

// first i should take in an Input
let input = "me, emotional, afternoon, gardens, reflection";

// then I should take those words and split them into an Array
let fiveWords = input.split(", ");

console.log(fiveWords);

// loop through the five words
// prettier-ignore
fiveWords.forEach(word => {
    //console.log(word)
    // that array is mapped to a dictionary
    word = word.toLowerCase()
    if (!ignoredWords.includes(word)){  // if the word is not supposed to be ignored,
    if (word in myDatabase) {           // if you have used the word before,
      myDatabase[word] += 1;            // then increase its usage by one
    } else {                            // otherwise,
      myDatabase[word] = 1;             // add the word to the dictionary and set it a value of one
    }
  }})

// PROBLEM: WHY IS ME NOT A STRING? AND WILL IT MATTER WHICH IT IS? -- MAKE SURE YOU SPLIT BY ", "
console.log(myDatabase);
//console.log(myDatabase[0])

return myDatabase;

// give users the option to see what their most frequent words are in a day , week , month, year, and lifetime

// // STRETCH //
// graph this data eventually

// create a login authentication and database structure

// create a wireframe webapp and mobile app

// push a daily Notification to log this info

// give users the option to change when this notifaction appears and what form(s) to use like
// email, text, push Notification, web alert

// create a nice design for collecting this data (GUI)

// look into databases and users
