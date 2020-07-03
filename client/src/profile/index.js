import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Box, Avatar, Card, CardContent, Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    bg: {
        backgroundColor: theme.palette.secondary.light,
        flexGrow: 1,
        minHeight: '97vh',
        padding: theme.spacing(3),
    },
    avatar: {
        textAlign: 'center'
    },
    largeImage: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        display: 'inline-block'
    },
    card: {
        marginTop: theme.spacing(7),
        paddingTop: theme.spacing(2),
        minHeight: '55vh',
    },
    name: {
        textAlign: 'center',
        paddingTop: theme.spacing(1)
    },
    margin:{
        margin: theme.spacing(2)
    }
}));


export default function ProfileComponent() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <div className={classes.bg}>
                    <div className={classes.avatar}>
                        <Avatar alt="player" src={require("../media/player.png")} className={classes.largeImage} />
                    </div>
                    <div className={classes.name}>
                        <Typography variant="h4" component="h2">Player Profile</Typography>
                        <Typography variant="p" component="body">some text will...</Typography>
                    </div>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            <Divider className={classes.margin}/>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            <Divider className={classes.margin}/>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Grid>
        </Grid>
    );
}