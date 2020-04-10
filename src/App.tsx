import React from 'react';
import {Grid} from "@material-ui/core";
import Header from "./components/Header";
import Main from "./components/Main";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#81AAFE",
        height: "100vh",
        padding: "20px 30px 0 30px",
    },
    headerWrapper: {
        height: "70px",
        alignItems: "center",
        color: "#FFFFFF"
    },
    mainWrapper: {
        paddingTop: "20px"
    }
});

const App:React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container className={classes.headerWrapper}>
                <Header projectName="Study trello"/>
            </Grid>
            <Grid container className={classes.mainWrapper}>
                <Main/>
            </Grid>
        </Grid>
    )
};

export default App;
