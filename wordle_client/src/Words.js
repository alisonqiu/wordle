
export const defaultBoard = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

  
export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;

  await fetch('http://localhost:8000/word')
    .then((response) => (
      response.json()
      ))
    .then((result) => {
      //turn into an array of words
      const wordArr = result
      console.log(result)
      //pick a random word
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
      console.log(' wordSet, todaysWord: '+ wordSet+todaysWord)
    });
  return { wordSet, todaysWord };
};
