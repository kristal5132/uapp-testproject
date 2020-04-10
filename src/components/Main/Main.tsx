import React, {useState} from "react";
import DashboardCard from "../DashboardCard";
import Grid from "@material-ui/core/Grid";
import NewCard from "../NewCard/NewCard";




const Main:React.FC = () => {

    const [columns, setColumns] = useState([] as any);
    const addNewColumn = (name:string) => {
        setColumns((prevState: []) => [...prevState, name]);
    };
    return (
        <Grid container spacing={2}>
            {columns.length !== 0 ? columns.map((name:string) => <DashboardCard name={name}/>) : null}
            <NewCard addNewColumn={addNewColumn}/>
        </Grid>
    )
};

export default Main