import React,{useState} from 'react';

function App() {
  return (
    <div>
      <HOCRed cmp={Counter}/>
      <HOCGreen cmp={Counter}/>
      <HOCBlue cmp={Counter}/>
    </div>
  );
}

function HOCRed(props){
  return (<div>
    <h2 style={{backgroundColor:'red', color:'blue'}}>Red<props.cmp/></h2>
  </div>)
}
function HOCGreen(props){
  return (<div>
    <h2 style={{backgroundColor:'green' , color:'red'}}><props.cmp/>Green</h2>
  </div>)
}

function HOCBlue(props){
  return (<div>
    <h2 style={{backgroundColor:'blue',color:'green'}}>Blue<props.cmp/></h2>
  </div>)
}

function Counter(){
  const [ count ,setCount] = useState(0)
  return (<div>
    <h1>{count} </h1><br/>
    <button style={{color:"darkred", backgroundColor:"grey" , fontStyle:"italic", border:'none'}} onClick={()=>setCount(count + 1)}>Add One</button>
  </div>)
}

export default App;