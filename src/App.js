import React,{useState} from 'react';

function App() {

  const [name, setName] = useState(false)

  
  const getData = (val) =>{ 
    let info = (val.target.value)   
    // setName(val.target.value)
    // (false)
    // console.log(val.target.value);

    return {...info};
    // setPrint(false)
   }

  const clickHandle = () =>{
    console.log(getData())
  
     setName(true)
     


      
      // setName(a)
  }

  return (
    <div>
        <h1>{name}</h1>
      <button onClick={clickHandle}>Click Me</button>
      <input onChange={getData} />
    </div>
  );
}

export default App;