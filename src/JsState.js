// import { useState } from "react";

// export const JsState = ()=>{

//     // const [age, setAge] = useState(0)

//     // const increaseAge =() =>{
//     //     setAge(age  + 1);
//     // }

//     // return (
//     //     <div className="App">
//     //         {age}
//     //         <button onClick={increaseAge}>Increase Age</button>
//     //     </div>
//     // )

//     //-------------------------------------
//     // const [inputValue, setInputValue] = useState("")

//     // const handleInputChange = (event) =>{

//     //     setInputValue(event.target.value)

//     // }

//     // return (
//     //     <div className="App">
//     //         <input type="text" onChange={handleInputChange} />
//     //         {inputValue}
//     //     </div>
//     // )

//     //====================================
//     // const [showText, setShowText] = useState(true);

//     // return (
//     //     <div className="App">
//     //         <button onClick={()=>{setShowText(!showText)}}>Show /Hide</button>
//     //         {showText === true && <h1>My name is solomon</h1>}
//     //     </div>
//     // )


//     const [textColor, setTextColor] = useState("black");

//     return (
//         <div className="App">
//             <button onClick={()=>{setTextColor(textColor=== "black" ? "red" :"black")}}>Show /Hide</button>
//             <h1 style={{ color : textColor }}>My name is solomon</h1>
//         </div>
//     )
// }