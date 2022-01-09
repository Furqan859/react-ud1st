import React,{useState,useMemo} from 'react';

function App() {
  const [update , setUpdate] = useState(0);
  const [item , setItem] = useState(10);
  
  const memofunction = useMemo(function multicount(){
    console.log("multicount")
    return update*5
  },[update])
  return (
    <div>
      {memofunction}
      <h1>{update}</h1>
      <h1>{item}</h1>
      <button onClick={()=>setUpdate(update+1)}>update</button>
      <button onClick={()=>setItem(item*10)} >multi</button>
    </div>
  );
}

export default App;