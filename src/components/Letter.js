import React,{useContext, useEffect} from "react"
//import { AppContext } from "../App";
import { styled,createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { AppContext } from "../App";

export default function Letter({row,col}) {
    const {board, correctWord, currAttempt,guessedLetters, setGuessedLetters} = useContext(AppContext)

    const letter = board[row][col]

    //change the color of board based on how correct the letter is 
    const green = correctWord.toUpperCase()[col] === letter
    //not correct and not empty and the current word includes this letter
    const yellow = !green && letter !=="" && correctWord.toUpperCase().includes(letter)
    //only check after enter
    //console.log(currAttempt.row +" "+ row)
    const letterState = currAttempt.row > row && green? '#528d4e':currAttempt.row > row && yellow? '#b49f39':'3a393c'
    //const letterState = currAttempt.row > row && green? green:currAttempt.row > row && yellow? yellow:grey
        {/*mui styling*/}
        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: letterState,
            padding: theme.spacing(3),
            margin:theme.spacing(1),
            //width: '2.5em',
            height: '0.3em',
            //textAlign: 'center',
            //alignItems: 'center',
            //borderWidth: "1px",
            //borderColor: "yellow !important",
            color: theme.palette.text.primary,
            border: '1px solid grey',
            //display: 'flex',
            placeItems: 'center',
            fontSize: '30px',
            fontWeight: 'bolder',
          }));
    
    
    //add the incorrect letters to guessedLetters each time we move to a new row
    useEffect(()=>{
        if (letter !== "" && !green && !yellow){
            setGuessedLetters((prev)=> [...prev, letter])
            console.log('guessedLetters: ',guessedLetters)
        }
    },[currAttempt.row])

    return (
        <Item  placeItems= 'center'>{letter}</Item>
    )
}