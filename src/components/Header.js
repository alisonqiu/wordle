import React from "react"
import Box from '@mui/material/Box';

export default function Header() {
    return (
        <Box 
        sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
          }}
        className="title-container">
            <h1>Wordle</h1>
        </Box>
    )
}