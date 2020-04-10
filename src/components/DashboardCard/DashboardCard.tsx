import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Button, TextField, CardActions, Grid, Theme} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {Add} from '@material-ui/icons';

const useStyles = makeStyles((theme:Theme) => {
    const {palette} = theme;
    return {
        root: {
            width: "275px",
        },
        button: {
            justifyContent: "flex-start",
            textTransform: "inherit",
            color: palette.primary.main
        },
        cardContent: {
            padding: "8px 16px 8px 16px"
        },
        textField: {
            height: "35px",
            flexDirection: "row"
            /*"&.MuiOutlinedInput-root": {
                fieldset: {
                    border: "none"
                }
            },
            "&.MuiOutlinedInput-input": {
                input: {
                    fontWeight: "600",
                    color: palette.primary.main
                }
            },
            "&.Mui-focused": {
                fieldset: {
                    border: "2px solid",
                    color: "#FFFFFF",
                    cursor: "text"
                }
            }*/
        }
    }
});


const DashboardCard:React.FC<{name:string}> = ({name}) => {
    const classes = useStyles();
    return (
        <Grid item>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <TextField id="outlined-basic"  variant="outlined" defaultValue={name} className={classes.textField}/>
                </CardContent>
                <CardActions>
                    <Button size="medium" fullWidth className={classes.button}>
                        <Add fontSize="small"/>
                        Добавить карточку
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
};

export default DashboardCard