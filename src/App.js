import react from 'react';

function App() {
  const firstname = 'John';
  const age = 28;
  const job = "new job";
  
  const placeholder ="Enter your details"
  const getFullName = (firstname) => `${firstname}`
  const inputFieldBox = <input placeholder={placeholder} autoComplete/>
 const mArry = [1,2,3,4,5];
 const mObj = {
   name: 'furqan',
   age: 18,
   job: 'programmer'
 };
  return (
   <div className="App">
     <h1>first name : {getFullName(firstname)}</h1>
   <p>age : {mObj.age}</p>
   <h3> job : {mObj.job}</h3>

   <input placeholder={placeholder} autoComplete/>
 {inputFieldBox} <br></br>
 {mArry[2]}  <br></br>
 {mArry[1]>0?"true":"false"} 
   </div>
  );
}

export default App;
