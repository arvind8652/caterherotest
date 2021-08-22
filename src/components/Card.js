import React from 'react'
import  "./Card.css";
import { Modal } from './Modal';

export const Card = (props) => {
    return (
        <div className="card">
  <img src={props.urlpath} alt="Avatar" style={{width:"100%"}} />
</div>
    )
}
