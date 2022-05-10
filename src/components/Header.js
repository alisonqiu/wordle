import React from "react"
import Box from '@mui/material/Box';

export default function Header() {
    return (
        <Box 
        sx={{
            display: 'flex',
            //width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            //bgcolor: 'background.default',
            //color: 'text.primary',
            textAlign: 'center',
            backgroundColor: '#8c9c78',
            border: '1 solid black',
            p: 3,
          }}
        className="title-container">
            <h1>Wordle</h1>
        </Box>
    )
}