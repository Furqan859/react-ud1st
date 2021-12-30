import React from 'react';

function App() {
  let name = "Furqan Rasool";
  function todo () {
    alert("Furqan")
  }
  
  return (
     
    <div>
<h1>{name}</h1>
<button onClick={()=>todo()} >CLick me</button>
<br></br> <br></br>

<button onClick={todo}>CLick To Show</button>

    </div>
  );
}

export default App;