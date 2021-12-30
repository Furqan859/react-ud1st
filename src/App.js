import React, { useState } from 'react';
import Students from './Students';

function App() {
  
  
  return (
     
    <div>
          <Students name={"Furqan"} email="furqanrasool2@gmail.com" other={{mobile:"03055673859",adress:"lahore"}} />
          <Students name={"Furqan"} email="furqanrasool2@gmail.com" other={{mobile:"03055673859",adress:"lahore"}} />
          <Students name={"Furqan"} email="furqanrasool2@gmail.com" other={{mobile:"03055673859",adress:"lahore"}} />
    </div>
  );
}

export default App;