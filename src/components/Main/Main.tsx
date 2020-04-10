import React from "react";
import DashboardCard from "../DashboardCard";
import Grid from "@material-ui/core/Grid";
import NewCard from "../NewCard/NewCard";


const Main:React.FC = () => {
    return (
        <Grid container spacing={2}>
            <DashboardCard/>
            <NewCard/>
        </Grid>
    )
};

export default Main