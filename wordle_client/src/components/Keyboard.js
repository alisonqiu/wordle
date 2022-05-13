import React, { useCallback, useContext,useEffect } from "react"
import { AppContext } from "../App";
import Grid from '@mui/material/Grid';
import Key from "./Key";

const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const line3 = ["Z", "X", "C", "V", "B", "N", "M"];

export default function Keyboard() {
    const{onSelectLetter, onDeleteLetter, onEnterLetter,guessedLetters} = useContext(AppContext)

    //handle when user enters the letters through keyboard
    //use useCallback to prevent unnecesarry updating 
    const handleKeyboard = useCallback((event)=>{
        //event tells me what letter is entered
        if (event.key === "Enter"){
            onEnterLetter()
        }else if (event.key === "Backspace"){
            onDeleteLetter()
        }else{
            //loop through every key in line 1,2,3 to check if the pressed
            //key equals one of them
            line1.forEach((key) => {
                if(event.key.toUpperCase() === key.toUpperCase()){
                    onSelectLetter(key)
                }
            })
            line2.forEach((key) => {
                if(event.key.toUpperCase() === key.toUpperCase()){
                    onSelectLetter(key)
                }
            })
            line3.forEach((key) => {
                if(event.key.toUpperCase() === key.toUpperCase()){
                    onSelectLetter(key)
                }
            })
        }
    })

    useEffect(()=>{
        document.addEventListener("keydown",handleKeyboard)
        //remove event listener after we're done
        return ()=>{
            document.removeEventListener("keydown",handleKeyboard)
        }
    },[handleKeyboard])
      
    return (
        <Grid  className="key-container" onKeyDown={handleKeyboard}>
            <Grid className="line1">
                {line1.map((key) => {
                    return <Key keyVal={key} guessed={guessedLetters.includes(key)}/>;
                })}
            </Grid>
            <Grid className="line2">
                {line2.map((key) => {
                    return <Key keyVal={key} guessed={guessedLetters.includes(key)}/>;
                })}
            </Grid>
      
            <Grid className="line3">
                <Key keyVal={"ENTER"} />
                {line3.map((key) => {
                return <Key keyVal={key} guessed={guessedLetters.includes(key)}/>;
                })}
                <Key keyVal={"DELETE"} />
            </Grid>
        </Grid>
    )
}