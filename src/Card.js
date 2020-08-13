import React from "react";

export default function Card(props){
    return(
        <div className="wrapper">
            <h1>Nasa Photo of the Day</h1>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <img src={props.imgUrl} alt="random image of space"></img>
            <p>{props.description}</p>
        </div>
    )
}