import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card"
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
      <Card title={cardData.title} date={cardData.date} description={cardData.explanation} imgUrl={cardData.url} />
    </div>
  );
}

export default App;
