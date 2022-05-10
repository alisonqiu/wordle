import React, { useState, createContext, useEffect } from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import "./App.css";
import Header from "./components/Header"
import GameOver from "./components/Gameover"
import Keyboard from "./components/Keyboard"
import Board from "./components/Board"
import { defaultBoard } from "./Words"
import { generateWordSet } from "./Words";
import pinkBg from "./images/pinkbg.jpg"
import bluebg from "./images/bluebg.jpg"


export const AppContext = createContext()

function App() {
  //set initial value of board to empty strings 
  const [board, setBoard] = useState(defaultBoard)
  //start from the first cell
  const [currAttempt, setCurrAttempt] = useState({ row : 0, col:0 });
  //start with an empty word set then set it using useEffect
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  //guessedLetters is an array of all the letters guessed that are not in the correct word
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  //set dark mode
  const [darkMode,setDarkMode] = useState(false)

  //genrate correct word
  useEffect(()=>{
    generateWordSet().then((word)=>{
      //word is an object that consisting of the set of all words and todaysWord
      setWordSet(word.wordSet)
      setCorrectWord(word.todaysWord);
    })
  },[])
  console.log(correctWord)
  //functions for select and delete letters
  const onEnterLetter = () =>{
      //warning message if not enough letters entered
      if (currAttempt.col<4){
        //TODO: display these messages on screen
        console.log('need to enter 5 letters')
        return
    }
    //otherwise, form currWord based on the 5 letters we entered 
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.row][i];
    }
    if(currWord.toLocaleLowerCase() === correctWord){
      alert("You won!")
      setGameOver({
        gameOver: true,
        guessedWord: true,
      }) 
      return
    }else if (currAttempt.row===5){
      setGameOver({
        gameOver: true,
        guessedWord: false,
      }) 
    }
    //check if currWord is in wordbank
    if (wordSet.has(currWord.toLowerCase())) {
        //if so, go to the next line
        setCurrAttempt({row: currAttempt.row+1, col:0})
    }else{
      //if currWord is not in wordbank
      console.log((currWord+' is not a valid word'))
      alert(currWord+' is not a valid word')
    }

  }

  const onDeleteLetter = () =>{
    //warning message if try to delete the 0th letter
    if (currAttempt.col===0){
      //TODO: display these messages on screen
      console.log('no letter to delete')
      return
    }
    //otherwise, delete current letter
    const newBoard = [...board]
    newBoard[currAttempt.row][currAttempt.col-1] = ''
    setBoard(newBoard) 
    setCurrAttempt({...currAttempt, col:currAttempt.col-1})
  }
  const onSelectLetter = (keyVal) =>{
    if (currAttempt.col>4){
      console.log("can't enter more than 5 letters")
      return;
      } 
    const newBoard = [...board]
    newBoard[currAttempt.row][currAttempt.col] = keyVal
    setBoard(newBoard) 
    setCurrAttempt({...currAttempt, col: currAttempt.col+1})
    
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: "#303030"
      }
    },
  });

  const sectionStyle = {
    backgroundImage:darkMode?`url(${pinkBg})`:`url(${bluebg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:'100vh'
  };

  
  return (
    <ThemeProvider theme = {darkMode? darkTheme: lightTheme}>
    <Paper
    sx={{textAlign: 'center',
    width: '100vw',
    height:'100vh'}}

    style ={sectionStyle}
>
    {/*everything inside <AppContext.Provider> have access to states we pass in  */}
    <AppContext.Provider value={{
          correctWord,
          board,
          setBoard,
          currAttempt, 
          setCurrAttempt,
          onSelectLetter,
          onDeleteLetter,
          onEnterLetter,
          setBoard,
          guessedLetters, 
          setGuessedLetters,
          gameOver,
          darkMode,
          setDarkMode,
    }}> 
    <Header/>
    {gameOver.gameOver? <GameOver/> : <Board/> }
    {gameOver.gameOver? "": <Keyboard/>}
</AppContext.Provider>
</Paper>
</ThemeProvider>
  );
}

export default App;
