import React from 'react';

import {Table} from 'react-bootstrap';

function App() {
  const user = [
    {Name:"Furqan" , Email:"furqanrasool2@gmail.com" , Contact:"03055673859"},
    {Name:"Usman" , Email:"usman@gmail.com" , Contact:"03127221493"},
    {Name:"Ahmed" , Email:"ahmed@gmail.com" , Contact:"03164252198"},
    {Name:"Ali" , Email:"ali@gmail.com" , Contact:"0309869867"}
  ]
  
  return (
    <div>
      <Table striped hover variant='dark' size='lg'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Conatct</th>
          </tr>
          </thead>
          <tbody>
      {user.map((item)=>
      
          <tr>
            <td>{item.Name}</td>
            <td>{item.Email}</td>
            <td>{item.Contact}</td>
          </tr>
        
      )}
      </tbody>
      </Table>
    </div>
  );
}

export default App;         