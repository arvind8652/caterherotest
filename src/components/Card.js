import React from 'react'
import Image from './Image'
import classes from "./Card.module.css";
import { Modal } from './Modal';

export const Card = () => {
    return (
        <div className={classes.card}>
            <Image/>
            <Modal/>
        </div>
    )
}
