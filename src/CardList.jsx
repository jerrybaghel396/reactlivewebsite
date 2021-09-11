import React from "react";
import './Cardlist.css'
import './Card.component'
import Card from "./Card.component";


function CardList(props){
    // console.log(props)
    return( <div className='card-list'>
         
    {props.monsters.map(monster =>(
        <Card key={monster.id} monster={monster}/>
           
       ))}
    </div>          
    )
}



export default CardList;