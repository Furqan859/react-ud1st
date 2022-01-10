import React from 'react';
// import Main from './Main';
import About from './About';
// import Home from './Home';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function App() {
  return (
    <div>

      <h1>erer</h1>
            <Link >Home</Link><br/>


      {/* <About/> */}
      

      {/* <Router> */}

      {/* <Link to="/home">Home</Link><br/> */}
      {/* <Link to="/main">Main</Link><br/>
      <Link to="/about">About</Link><br/> */}
      {/* <Route path="/home"><Home/></Route> */}
      
      {/* <Route path="/home"><Home/></Route> */}
      {/* <Route path="/about"><About/></Route> */}
       
       
       {/* </Router> */}
      </div>
  );
}
function Home() {
  return (
      <div>
          This is a home page
      </div>
  );
}


export default App;