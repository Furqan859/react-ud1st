import React, { useState } from 'react';
import Students from './Students';

function App() {
  const [data , setData] = useState("Usman")
  function go () {
    setData("Furqan")
  }
  return (
     
    <div>
      {data}
          <Students name={data}  />
          <button onClick={go}>Click Me</button>
          
          </div>
  );
}

export default App;