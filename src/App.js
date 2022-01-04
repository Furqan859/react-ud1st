import React from 'react';
import User from './User'
import "./user.css";


function App() {
  const user =[
    {name:"furqan",contact:"0300",address:"12345"},
    {name:"furqan",contact:"0300",address:"12345"},
    {name:"furqan",contact:"0300",address:"12345"}
  ]
  return (
    <div>
      { user.map((item ,i)=>
      <User item={item} />  
      )}
    </div>
  );
}

export default App;