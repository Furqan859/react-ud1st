import React from 'react';

import {Table} from 'react-bootstrap';

function App() {
  const user = [
    {name:"Furqan" , email:"furqanrasool2@gmail.com" , contact:"03055673859" ,address:[{houseNumber:"10D",state:"Punjab",city:"Lahore",country:"Pakistan"},{houseNumber:"10D",state:"Punjab",city:"Lahore",country:"Pakistan"},{houseNumber:"10D",state:"Punjab",city:"Lahore",country:"Pakistan"}]},
    {name:"Usman" , email:"usman@gmail.com" , contact:"03127221493",address:[{houseNumber:"10D",state:"Punjab",city:"Lahore",country:"Pakistan"},{houseNumber:"10D",state:"Punjab",city:"Lahore",country:"Pakistan"},{houseNumber:"10D",state:"Punjab",city:"Lahore",country:"Pakistan"},]},
    {name:"Ahmed" , email:"ahmed@gmail.com" , contact:"03164252198",address:[{houseNumber:"10D",state:"Punjab",city:"Lahore",country:"Pakistan"},{houseNumber:"10D",state:"Punjab",city:"Lahore",country:"Pakistan"},{houseNumber:"10D",state:"Punjab",city:"Lahore",country:"Pakistan"}]},
    {name:"Ali" , email:"ali@gmail.com" , contact:"0309869867",address:[{houseNumber:"10D",state:"Punjab",city:"Lahore",country:"Pakistan"},{houseNumber:"10D",state:"Punjab",city:"Lahore",country:"Pakistan"},{houseNumber:"10D",state:"Punjab",city:"Lahore",country:"Pakistan"}]}
  ]
   
  return (<div>
     <h1 style={{marginLeft:"40%"}}>Table Data </h1>
     <Table  striped>
       <thead>
         <tr>
           <th>S.N</th>
           <th>Name</th>
           <th>Email</th>
           <th>Contact</th>
           <th>Address</th>
         </tr>
       </thead>
       
         {
           user.map((item , i)=>
            <tr key={i} >
              <td>{i+1}</td>   
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
            <td>
              <Table  striped variant="dark">
                <thead>
                  <tr>
                    <th>House Number</th>
                    <th>State</th>
                    <th>CIty</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody>
              {
              item.address.map((data)=>
              <tr>
                <td>{data.houseNumber}</td>
                <td>{data.state}</td>
                <td>{data.city}</td>
                <td>{data.country}</td>
              </tr>
              )
              }
              </tbody>
              </Table>
              </td>

              
          </tr>
           )
         }
         
      </Table>
     </div>
  );
}

export default App;         