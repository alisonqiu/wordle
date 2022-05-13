
import wordBank from "./wordle-bank.txt"

export const defaultBoard = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

//check if the word I typed exists in this set (no api)
export const generateWordSetNoapi = async () => {
    let wordSet;
    let todaysWord;
    await fetch(wordBank)
      .then((response) => response.text())
      .then((result) => {
        //turn into an array of words
        const wordArr = result.split("\n");
        console.log(wordArr)
        //pick a random word
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set(wordArr);
      });
    return { wordSet, todaysWord };
  };
  
export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  //uncomment when i can use api
  // await fetch('http://localhost:8000/word')
  //   .then((response) => (
  //     response.json()
  //     ))
  //   .then((result) => {
  //     //turn into an array of words
  //     const wordArr = result
  //     console.log(result)
  //     //pick a random word
  //     todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  //     wordSet = new Set(wordArr);
  //     console.log(' wordSet, todaysWord: '+ wordSet+todaysWord)
  //   });
  return { wordSet, todaysWord };
};
