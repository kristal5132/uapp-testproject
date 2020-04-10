import React, {useState} from "react";
import {Button, Card, CardActions, IconButton, TextField, Grid} from "@material-ui/core";
import {Add} from '@material-ui/icons';
import {makeStyles} from "@material-ui/core/styles";
import {primaryColor} from "../../theme/variables";
import Close from '@material-ui/icons/Close';


const useStyles = makeStyles({
    button: {
        justifyContent: "flex-start",
        textTransform: "inherit",
        color: primaryColor,
        backgroundColor: "rgba(255,255,255,0.7)",
        height: "40px"
    },
    cardAction: {
        alignItems: "flex-start",
        width: "275px",
        paddingTop: "0",
    },
    cardAdd: {
        width: "275px"
    },
    textField: {
        maxWidth: "100%",
        width: "265px",
        padding: "10px"
    },
    addButton: {
        textTransform: "inherit",
        backgroundColor: "#61BD4F",
        color: "#FFFFFF",
        '&:hover': {
            backgroundColor: "#53BD00"
        }
    },
    displayCard: {
        display: "block"
    },
    dontDisplayCard: {
        display: "none"
    }
});


const NewCard:React.FC = () => {
    const classes = useStyles();
    const [isActiveAddCard, setIsActiveAddCard] = useState(false);
    const [displayAddCard, setDisplayAddCard] = useState(true);

    const toggleAddCardButton = () => {
        setIsActiveAddCard((prevState:boolean) => !prevState);
        setDisplayAddCard((prevState:boolean) => !prevState);
    };

    return (
        <Grid item>
            <CardActions className={displayAddCard? `${classes.cardAction} ${classes.displayCard}` :
                `${classes.cardAction} ${classes.dontDisplayCard}`}>
                <Button size="medium" fullWidth className={classes.button} onClick={() => toggleAddCardButton()}>
                    <Add fontSize="small"/>
                    Добавить колонку
                </Button>
            </CardActions>
            <Card className={isActiveAddCard ? classes.displayCard: classes.dontDisplayCard}>
                <TextField id="outlined-basic"
                           placeholder="Ввести заголовок списка"
                           variant="outlined"
                           className={classes.textField} />
                <CardActions className={classes.cardAdd}>
                    <Button className={classes.addButton}>Добавить список</Button>
                    <IconButton aria-label="close">
                        <Close onClick={() => toggleAddCardButton()}/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
};

export default NewCard