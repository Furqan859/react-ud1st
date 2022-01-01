import React,{useState} from 'react';


function App() {
  const [name , setName] = useState(null)

  const [ print ,setPrint] = useState(false)
  
 

 

 const getdata = (val)=> {setName(val.target.value)
 setPrint(false) }

  return (
 <div>      
          {
            print ? <h1>{name}</h1> : null
          }
          <input onChange={getdata}></input>
        <button onClick={()=>setPrint(true)}>Click Me</button>
       </div>
  );
}

export default App;