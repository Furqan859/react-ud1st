import React,{useState} from 'react';

function App() {
  const [name ,setName] = useState("");
  const [tnc ,setTnc] = useState(false);
  const [interest , setInterest] = useState("");
  const onFormData = (e) => {
    e.preventDefault()
     console.log(name,tnc,interest);}
  return (
    <div>
      <h1>Handle Form React</h1>
     <form onSubmit={onFormData}>
     <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)} />  <br />  <br />
     <select onChange={(e)=>setInterest(e.target.value)}> <br />  <br />
      <option>Selet Option</option>
       <option>Marvel</option>
       <option>DC</option>
       <option>Network</option>
     </select>
     <br />  <br />
     <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and Condions</span>
     <br />  <br />

     <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;