import { Box } from "@mui/system";
import React, { useState } from "react";
import styles from "./Section.module.css";
import { Grid } from "@mui/material";
import Card from "../Card/Card";

export default function Section({albumData,title}){
    const [showAll, setShowAll] = useState(true);
    function handleClick(){
        setShowAll((prevState)=>!prevState);
    }

    return(
        <Box className={styles.sectionContainer}>
            <Box className={styles.section}>
                <div className={styles.topBar}>
                    <p>{title}</p>
                    <p className={styles.showBtn} onClick={handleClick}>{showAll?"Show All":"Collapse"}</p>
                </div>
                {
                    showAll?
                    <Grid container spacing={1} rowSpacing={2}>
                        {albumData.map(album => {
                            return(
                                <Grid item key={album.id} sm={3} md={3} lg={1.5}>
                                    <Card title={album.title} follows={album.follows} image={album.image}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                    :
                    <div></div>
                }
            </Box>
        </Box>
    )
}