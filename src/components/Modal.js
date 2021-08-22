import { Card } from "./Card";
import classes from "./Modal.module.css";

export const Modal = (props) => {
    return (

        // <div style={{ width:"100%", height:"100%", backgroundColor:"red"}}>
        <div className={classes.Modal} onClick={props.closeModalHandler}>
            <div className={classes.ModalImg}>
            <img src={props.urlpath} alt="Avatar" style={{width:"100%"}} />
            </div>
        </div>
        // </div>
    )
}
