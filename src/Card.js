import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 80%;
    background-color: black;
    color: lavender;
    align-content: center;
    justify-content: space-evenly;
    margin: auto;
    /* border: 1px solid red; */
    p{
        width: auto;
        margin: 5% 10%;
        /* border: 1px solid red; */
        justify-content: center;
        align-content: center;
    }
`;
export default function Card(props){
    return(
       <Wrapper>
            <div className="wrapper">
                <h1>Nasa Photo of the Day</h1>
                <h2>{props.title}</h2>
                <p>{props.date}</p>
                <img src={props.imgUrl} alt="random image of space"></img>
                <p>{props.description}</p>
            </div>
       </Wrapper>
    )
}