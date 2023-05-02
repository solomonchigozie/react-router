import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// import {User} from "./User";
// import { Planets } from './Planets';
// import { JsState } from './JsState';
// import { Todo } from './Todo';
// import { useState } from 'react';
// import { Task } from './Task';
import axios from 'axios';


function App(){

  const [excuse, setExcuse] = useState("");
  const [familyExcuse, setFamilyExcuse] = useState("");

  const fetchFamilyExcuse = () =>{
    if(excuse === null || excuse === ""){
      axios.get(`https://excuser-three.vercel.app/v1/excuse/family/`).then((res) => {
        setFamilyExcuse(res.data[0].excuse)
      })
    }else{
      axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
        setFamilyExcuse(res.data[0].excuse)
      })
    }
  }
  

  return(
    <div className='App'>
      <h1>EXCUSE APP</h1>
      <h4>You can now give any excuse you want &#128516;</h4>
      <select className='dropdown' onChange={event => {setExcuse(event.target.value)}}>
        <option value="family">Family</option>
        <option value="office">Office</option>
        <option value="developers">Developer</option>
      </select>
      <br />
      <br />
      <button className='excbutton' onClick={fetchFamilyExcuse}>Generate Excuse</button><br/>

      <h5>Excuse : {familyExcuse}</h5>
    </div>
  );
}

// function App(){

//   const [name, setName] = useState("");

//   const [predictedAge, setPredictedAge] = useState(null)

//   const fetchData = ()=>{
//     axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//       setPredictedAge(res.data)
//     })
//   }

//   return (
//     <div className='App'>
//       <input placeholder='Ex . pedro' onChange={event => {setName(event.target.value)}} />
//       <button onClick={fetchData}>Predict Age </button>
//       <h1>Name :  {predictedAge?.name}</h1>
//       <h1>Predicted Age :  {predictedAge?.age}</h1>
//       <h1>Count :  {predictedAge?.count}</h1>
//     </div>
//   );
// }

// function App(){
//   const [catFact, setCatFact] = useState("");
//   // fetch data with fetch
//   // fetch("https://catfact.ninja/fact")
//   // .then((res) => res.json())
//   // .then((data) => {
//   //   console.log(data)
//   // })

//   const fetchCatFact = ()=>{
//     axios.get("https://catfact.ninja/fact").then((res) => {
//         setCatFact(res.data.fact)
//     });
//   }

//   useEffect(()=>{
//     fetchCatFact()
//   }, []);

//   return (
//     <div className='App'>
//       <button onClick={fetchCatFact}>Generate Cat Fact</button>
//       <div>{catFact}</div>
//     </div>
//   );
// }

export default App;