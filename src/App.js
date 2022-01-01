import React from 'react';
import child1 from './child1';

function App() {
  const one = () => <h1>hello child 1 to 1</h1> ; 
  return (
    <div>
      <child1 one>hello child 1 to 1</child1>
    </div>
  );
}

export default App;