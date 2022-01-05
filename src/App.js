import React from 'react';
import Child from './Child';

function App() {
  function alertFunction(data) {
    
    alert(data)
    
  }
  return (
    <div>
      <Child name={alertFunction}/>
    </div>
  );
}

export default App;