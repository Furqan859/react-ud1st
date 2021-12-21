import react from 'react';
import './app.css';
function App() {

  const detCard = {
       title: 'Blog Card' ,
       description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
       product: 'Phone',
       Price : 20000
  }
 
  return (<div className="App">
    <div className="blogsCard">
      <h3>{detCard.title}</h3>
      <span>{detCard.description}</span>
      <h4>{detCard.product}</h4>
      <span>{detCard.Price}</span>
    </div>

    <div className="blogsCard">
      <h3>{detCard.title}</h3>
      <span>{detCard.description}</span>
      <h4>{detCard.product}</h4>
      <span>{detCard.Price}</span>
    </div>
    <div className="blogsCard">
      <h3>{detCard.title}</h3>
      <span>{detCard.description}</span>
      <h4>{detCard.product}</h4>
      <span>{detCard.Price}</span>
    </div>
    <div className="blogsCard">
      <h3>{detCard.title}</h3>
      <span>{detCard.description}</span>
      <h4>{detCard.product}</h4>
      <span>{detCard.Price}</span>
    </div>
  </div>);
}

export default App;
