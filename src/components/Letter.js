import React,{useContext} from "react"
//import { AppContext } from "../App";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Letter({row,col}) {
    {/*const {board} = useContext(AppContext)*/}

    {/*mui styling*/}
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    //const letter = board[row][col]
    
    return (
        <div></div>
    )
}