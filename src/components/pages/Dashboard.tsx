import React from "react";
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Header";
import Main from "../Main/Main";

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

const Dashboard:React.FC = () => {
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

export default Dashboard