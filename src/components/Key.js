import React, { useContext } from "react"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { AppContext } from "../App";

export default function Key({keyVal, eORd, guessed}) {
    const{onSelectLetter, onDeleteLetter, onEnterLetter} = useContext(AppContext)
    const selectLetter = () => {
        if (keyVal === 'ENTER'){
            onEnterLetter()
        }else if (keyVal === 'DELETE'){
            onDeleteLetter()
        }else{
            onSelectLetter(keyVal)
    }
    }
    
    return (
        <Button
        id = {guessed? 'guessed':'notGuessed'}

        sx={{
            //use create theme to change width
            width: '50px',
            height: '70px',
            margin: '5px',
            borderRadius: '4px',
            placeItems: 'center',
            fontSize: '20px',
            backgroundColor: 'grey',
            fontFamily: 'Arial',
            cursor: 'pointer',
          }} 

          onClick={selectLetter}
        >{keyVal}</Button>
            
    )
}

