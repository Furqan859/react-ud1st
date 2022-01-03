import React,{useState} from 'react';

import {Button} from 'react-bootstrap';

function App() {
  const [update , setUpdate] = useState("hjhj")
  
  return (
    <div>
      <h1>{update}</h1>
      <Button onClick={()=>setUpdate("abc")}>Click Me</Button>
    </div>
  );
}

export default App;         