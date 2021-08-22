import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const Gallery = (props) => {
    const [val, setval] = useState()
    useEffect(()=>{
        console.log(props.name);
        setval(props);
    },[])
    const abc = {
        if(val){
            alert('123');
        }
        // else{
        //     alert('456');
        // }
    }
    return (
        <div>
        {
            // val.map((val)=>{
            //     return val;
            // })
            // val
            // val
        }
        <Card/>
        </div>
    )
}
