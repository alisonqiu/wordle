import React, { useState,useEffect, useContext } from "react"
import Grid from '@mui/material/Grid';
import Letter from "./Letter"
import { AppContext } from "../App";
import board from "../images/board.jpg"

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
  const sectionStyle = {
    backgroundImage: darkMode?"url('https://images.unsplash.com/photo-1633218388467-539651dcf81f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80') ":`url(${board})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPosition:'center',
  };

    return (
        <Grid container 
        style={sectionStyle}
        display='grid'
        justifyContent="center"
        alignItems="center" 
        className="board" 
        sx={{
          paddingTop:"30px",
          paddingBottom:"30px"
        }}
        >

        <Grid container spacing='auto' >
          <FormRow row = {0}/>
        </Grid>
        <Grid container spacing='auto' >
          <FormRow row = {1}/>
        </Grid>
        <Grid container spacing='auto' >
          <FormRow row = {2}/>
        </Grid>
        <Grid container spacing='auto' >
          <FormRow row = {3}/>
        </Grid>
        <Grid container spacing='auto' >
          <FormRow row = {4}/>
        </Grid>
        <Grid container spacing='auto' >
          <FormRow row = {5}/>
      </Grid> 
    

        </Grid>

    )
}