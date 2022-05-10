import React, { useContext } from "react"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { AppContext } from "../App";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    const theme = createTheme({
        palette: {
          primary: {
            main: '#9c9c9c',
            contrastText: '#fff',
          },
          secondary: {
            main: '#ffffff',
            contrastText: '#0000000',
          },
        },
      });
    return (
        <ThemeProvider theme={theme}>
        <Button
        variant="contained"
        color = {guessed?'primary': 'secondary'}
        sx={{
            margin: '5px',
            borderRadius: '4px',
            placeItems: 'center',
            fontSize: '15px',
            backgroundColor: 'grey',
            fontFamily: 'Arial',
            cursor: 'pointer',
          }} 

          onClick={selectLetter}
        >{keyVal}</Button>
        </ThemeProvider>
            
    )
}

