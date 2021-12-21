import react from 'react';
import './app.css';
function App() {

  const detCard = [
      {
        id: 1,
        title: 'Blog Card 1' ,
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
        product: 'Phone',
        Price : 3000
      },
      {
        id: 2,
        title: 'Blog Card 2' ,
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
        product: 'led',
        Price : 5000
      },
      {
        id: 3,
        title: 'Blog Card 3' ,
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
        product: 'laptop',
        Price : 7000
      },
      
    ]
    const car = detCard.map((item)=>{
      console.log(item  )
      return(
        <div className="blogsCard" key={item.id}>
        <h3>{item.title}</h3>
        <span>{item.description}</span>
        <h4>{item.product}</h4>
        <span>{item.Price}</span>
      </div>
      )
    })

    
 
  return (<div className="App">
    {car}
</div>);
}

export default App;
