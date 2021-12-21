import react from 'react';
import './app.css';
import BlogCrad from './BlogCrad';
import {isArrayEmpty} from './utils';
function App() {

  const detCard = [
      {
        
        title: 'Blog Card 1' ,
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
        product: 'Phone',
        Price : 3000
      },
      {
        
        title: 'Blog Card 2' ,
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
        product: 'led',
        Price : 5000
      },
      {
        
        title: 'Blog Card 3' ,
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
        product: 'laptop',
        Price : 7000
      },
      
    ]
    const car =isArrayEmpty(detCard) ? [] : detCard.map((item ,pos)=>{
      
      return(
        <BlogCrad key={pos} title={item.title} description={item.description} price={item.price} product={item.product}/>
      )
    })

    
 
  return (<div className="App">
    {car}
</div>);
}

export default App;
