// import React from 'react';
// // import Main from './Main';
// import About from './About';
// // import Home from './Home';

// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

// function App() {
//   return (
//     <div>

//       <h1>erer</h1>
//             <Link >Home</Link><br/>


//       {/* <About/> */}
      

//       {/* <Router> */}

//       {/* <Link to="/home">Home</Link><br/> */}
//       {/* <Link to="/main">Main</Link><br/>
//       <Link to="/about">About</Link><br/> */}
//       {/* <Route path="/home"><Home/></Route> */}
      
//       {/* <Route path="/home"><Home/></Route> */}
//       {/* <Route path="/about"><About/></Route> */}
       
       
//        {/* </Router> */}
//       </div>
//   );
// }
// function Home() {
//   return (
//       <div>
//           This is a home page
//       </div>
//   );
// }


// export default App;

import React from 'react';
import { Table } from 'react-bootstrap';

function App() {
  const array = [{name:"furqan",gmail:"furqan@gmail.com",contact:"03055"},
  {name:"furqan",gmail:"furqan@gmail.com",contact:"03055"},
  {name:"furqan",gmail:"furqan@gmail.com",contact:"03055"},
  {name:"furqan",gmail:"furqan@gmail.com",contact:"03055"},
  {name:"furqan",gmail:"furqan@gmail.com",contact:"03055"},
  {name:"furqan",gmail:"furqan@gmail.com",contact:"03055"},]
  return (
    <div>
      {array.map((item,key)=>
        <Table>
          <tr>
            <td>{item.name}</td>
            <td>{item.gmail}</td>
            <td>{item.contact}</td>
          </tr>
        </Table>
      )}
    </div>
  );
}

export default App;