
// function App(){
//   const [todoList, setTodoList] = useState([]);
//     const [newTask, setNewTask] = useState("")

//     const handleChange = (event)=>{
//       setNewTask(event.target.value)
//     }

//     const addTask = () =>{
//         const task = {
//             id : todoList.length ===0? 1 : todoList[todoList.length -1].id +1,
//             taskName : newTask,
//             completed : false,
//         }
//         setTodoList([...todoList, task])
//     }

//     const deleteTask = (id) =>{
//         setTodoList(todoList.filter((task) => task.id !== id ));
//     }

//     const completeTask = (id) =>{
//       setTodoList(
//         todoList.map((task) => {{
//           if(task.id ===id){
//             return {...task, completed : true}
//           }else{
//             return task;
//           }
//         }})
//       )
//   }

//     return (
//         <div className="App">
//             <div className="addTask">
//                 <input onChange={handleChange}/>
//                 <button onClick={addTask}>Add Task</button>
//             </div>

//             <div className="list">
//                 {todoList.map((task)=>{
//                     return <Task 
//                     taskName={task.taskName} 
//                     id={task.id} 
//                     deleteTask={deleteTask}
//                     completeTask={completeTask} 
//                     />
//                 })}
//             </div>
//         </div>
//     )
// }
// function App() {
//   const age = 19
//   const isGreen = true
//   const names = ["solomon", "jack", "michael", "thompson", "williams"];
//   return (
//     <div className="App">
//       <Todo />
//       <JsState />
//       <Planets />
//       <Header />
//       {/* <User name="solomon" age={21} email="test@test.com" /> */}
//       <table border="1">
//         <tr>
//           <th>Company</th>
//           <th>Position</th>
//           <th>Salary</th>
//         </tr>
//           <Job salary={20000} position="Senior Dev" company="Amazon" />
//           <Job salary={56000} position="Senior Dev 2" company="Facebook" />
//           <Job salary={27800} position="Senior Dev 1" company="Dangote" />
//       </table>
//       {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1> }
//       <h1 style={{ color : isGreen ? "green" : "white", backgroundColor : "red"}}>HAS COLOR</h1>
//       {isGreen && <button>this is a button</button>}
//       {/* access array or list  */}
//       <h1>{names[0]}</h1>
//       <h1>{names[1]}</h1>

//       {names.map((name, key)=>{
//         return <h6 key={key}>{name}</h6>
//       })}
      
//     </div>
//   );
  
// }

