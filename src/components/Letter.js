import React,{useContext, useEffect} from "react"
//import { AppContext } from "../App";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { AppContext } from "../App";

export default function Letter({row,col}) {
    const {board, correctWord, currAttempt,guessedLetters, setGuessedLetters} = useContext(AppContext)

    {/*mui styling*/}
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'red',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


    const letter = board[row][col]

    //change the color of board based on how correct the letter is 
    const green = correctWord.toUpperCase()[col] === letter
    //not correct and not empty and the current word includes this letter
    const yellow = !green && letter !=="" && correctWord.toUpperCase().includes(letter)
    //only check after enter
    //console.log(currAttempt.row +" "+ row)
    const letterState = currAttempt.row > row && green? 'green':currAttempt.row > row && yellow? 'yellow':'grey'

    //add the incorrect letters to guessedLetters each time we move to a new row
    useEffect(()=>{
        if (letter !== "" && !green && !yellow){
            setGuessedLetters((prev)=> [...prev, letter])
            console.log('guessedLetters: ',guessedLetters)
        }
    },[currAttempt.row])

    return (
        <Item id={letterState}>{letter}</Item>
    )
}