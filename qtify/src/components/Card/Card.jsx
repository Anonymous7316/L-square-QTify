import * as React from 'react';
import Chip from '@mui/material/Chip';
import { Box } from "@mui/system";
import styles from "./Card.module.css";

export default function Card({title,likes,follows,image}){
    return(
        <Box className={styles.card}>
            <div className={styles.cardDetails}>
                <div className={styles.cardImage}>
                    <img className={styles.img} src={image} alt="AlbumImage"/>
                </div>
                <div className={styles.follows}>
                    <Chip className={styles.chip} label={follows?`${follows} Follows`:`${likes} Likes`} />
                </div>
            </div>
            <div>
                <p className={styles.cardFooter}>{title}</p>
            </div>
        </Box>
    )
}