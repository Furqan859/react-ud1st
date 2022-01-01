import React from 'react';
import child1 from './child1';
import child2 from './child2';

function App() {
  const one = () => <h1>hello child 1 to 1</h1> ; 
  return (
    <div>
      <child1 one>parent function</child1><br/> <br/>
      <child2 one>parent function</child2>
    </div>
  );
}

export default App;