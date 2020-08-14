import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card"
import styled from "styled-components"

const Page = styled.div`
background-color: black;
`

function App() {
 const [cardData, setCardData] = useState([])
  useEffect(() =>{
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=0UqIQ0ydzvaWmlbWKrVfgPNvDPxw8wICYXnYse1I`)
    .then(res =>{
      console.log(res)
      setCardData(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
  }, []);



  return (
    <div className="App">
      <Page>
        <Card title={cardData.title} 
        date={cardData.date} 
        description={cardData.explanation} 
        imgUrl={cardData.url} />
      </Page>
    </div>
  );
}

export default App;
