import React from 'react'
import SimpleMap from './SimpleMap'
import { Grid, Paper, Container } from '@material-ui/core'

const Map = () => {
    return (
        <Grid container style={{height:'80vh', width:'100%'}}>
            <Grid item xs={12}>
                <SimpleMap />
            </Grid>
        </Grid>
    )
}

export default Map