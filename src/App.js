import React, { useState } from 'react';

function App() {
  const [data , setData] = useState("Furqan")
  function todo () {
  setData("Rasool")
  }
  
  return (
     
    <div>
<h1>{data}</h1>
<button onClick={()=>todo()} >CLick me</button>


    </div>
  );
}

export default App;