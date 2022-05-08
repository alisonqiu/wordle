import React, { useState } from "react"
import Grid from '@mui/material/Grid';
import { defaultBoard } from "../Words";
import Letter from "./Letter"

function FormRow({row}) {
    return (
      <React.Fragment>
            <Grid item xs={12/5}>
                <Letter row = {row} col={0} />
            </Grid>
            <Grid item xs={12/5}>
                <Letter row = {row} col={1} />
            </Grid>
            <Grid item xs={12/5}>
                <Letter row = {row} col={2} />
            </Grid>
            <Grid item xs={12/5}>
                <Letter row = {row} col={3} />
            </Grid>
            <Grid item xs={12/5}>
                <Letter row = {row} col={4} />
            </Grid>
        </React.Fragment>
    );
  }

export default function Board(props) {

    return (
        <Grid container justifyContent="center" className="board" >

        <Grid container item spacing='auto'>
          <FormRow row = {0}/>
        </Grid>
        <Grid container item spacing='auto'>
          <FormRow row = {1}/>
        </Grid>
        <Grid container item spacing='auto'>
          <FormRow row = {2}/>
        </Grid>
        <Grid container item spacing='auto'>
          <FormRow row = {3}/>
        </Grid>
        <Grid container item spacing='auto'>
          <FormRow row = {4}/>
        </Grid>
        <Grid container item spacing='auto'>
          <FormRow row = {5}/>
        </Grid>
 

        </Grid>
    )
}