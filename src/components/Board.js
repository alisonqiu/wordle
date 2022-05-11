import React, { useState,useEffect, useContext } from "react"
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { defaultBoard } from "../Words";
import Letter from "./Letter"
import { AppContext } from "../App";
import bluebg from "..//images/bluebg.jpg"
import lightbg from "..//images/lightbg.jpg"


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
  const {darkMode} = useContext(AppContext)
  const image = React.useMemo((image) => (image=darkMode?"url('https://images.unsplash.com/photo-1633218388467-539651dcf81f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80') ":`${lightbg}`),[darkMode])
  const sectionStyle = {
    backgroundImage: image,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };



    return (
      //<ThemeProvider theme={theme}>
        <Grid container 
        style={sectionStyle}
        display='grid'
        justifyContent="center"
        alignItems="center" 
        className="board" 
        sx={{
          border: '1px solid black',
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