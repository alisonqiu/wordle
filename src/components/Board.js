import React, { useState } from "react"
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { defaultBoard } from "../Words";
import Letter from "./Letter"

function FormRow({row}) {
    return (
      <React.Fragment >
            <Grid item >
                <Letter row = {row} col={0} />
            </Grid>
            <Grid item >
                <Letter row = {row} col={1} />
            </Grid>
            <Grid item >
                <Letter row = {row} col={2} />
            </Grid>
            <Grid item >
                <Letter row = {row} col={3} />
            </Grid>
            <Grid item >
                <Letter row = {row} col={4} />
            </Grid>
        </React.Fragment>
    );
  }

export default function Board(props) {
    const theme = createTheme({
    components: {
      // Name of the component
      MuiGrid: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            width: 'auto',
          },
        },
      },
    },
  });

    return (
      //<ThemeProvider theme={theme}>
        <Grid container 
        display='grid'
        justifyContent="center"
        alignItems="center" 
        className="board" 
        sx={{
          border: '1px solid grey',
        }}
        >

        <Grid container spacing='auto' md={12}>
          <FormRow row = {0}/>
        </Grid>
        <Grid container spacing='auto' md={12}>
          <FormRow row = {1}/>
        </Grid>
        <Grid container spacing='auto' md={12}>
          <FormRow row = {2}/>
        </Grid>
        <Grid container spacing='auto' md={12}>
          <FormRow row = {3}/>
        </Grid>
        <Grid container spacing='auto' md={12}>
          <FormRow row = {4}/>
        </Grid>
        <Grid container spacing='auto' md={12}>
          <FormRow row = {5}/>
      </Grid> 
    

        </Grid>
       //</ThemeProvider>
    )
}