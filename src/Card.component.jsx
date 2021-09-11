import React from "react";
import './Card.style.css'



function Card(props){

    return(<div className='card-container'>
    <img src={`https://robohash.org/${props.monster.id}?set=set4&size=190x180`} alt="monsters" />
    <h1>{props.monster.name}</h1>
    <p>{props.monster.email}</p>
    </div>
    )
}


export default Card;