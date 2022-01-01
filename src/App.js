import React, { useState } from 'react';

function App() {
  const [data , setData] = useState(true)
 
  return (
    <div>
      {data?<h1>Hello World</h1>:null}
<button onClick={()=>setData(true)}>Show</button>
<button onClick={()=>setData(false)}>Hide</button>

    </div>
  );
}

export default App;