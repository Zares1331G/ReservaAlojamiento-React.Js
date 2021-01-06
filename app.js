class App extends React.Component {
  state={
    result:[...hotelsData],
    country:"",
    price:"Todos los precios",
    room:"Todos los tamaños"
  };

  priceFunction = (num) => {
    const {price} = this.state;
    if(price === "$"){
      return num === 1;
    }
    if(price === "$$"){
      return num === 2;
    }
    if(price === "$$$"){
      return num === 3;
    }
    if(price === "$$$$"){
      return num === 4;
    }
  }
  
  sizeFunction = (num) => {
    const {room} = this.state;
    if(room === "Pequeño"){
      return num <= 10;
    }
    if(room === "Mediano"){
      return num >10 && num <= 20;
    }
    if(room === "Grande"){
      return num > 20;
    }
  }

  handleChange = (e) =>{
    this.setState({[e.target.name] : e.target.value})
  }

  render(){
    const{country, result, price, room}=this.state;
    var box = [];
    if(country === ""){
      box = result;
    }else{
      box =result.filter(x => x.country === country);
    }
    if(price  !== "Todos los precios"){
      box = box.filter(x => {
        return this.priceFunction(x.price)
      });
    }
    if(room !== "Todos los tamaños"){
      box = box.filter(x => {
        return this.sizeFunction(x.rooms)
      });
    }

    const {handleChange}=this;
    const cards = box.map((card,index) =>(
      <Container
        key={index}
        photo={card.photo}
        name={card.name}
        description={card.description}
        city={card.city}
        country={card.country}
        room={card.rooms}
        price={card.price} 
      />
    ));
    
    return (      
      <div className="app">        
        <Header />
        <Filter handleChange={handleChange} />
        <div className="container">
          <div className="row">
            {cards}
          </div>          
        </div>
      </div>
    );
  }      
}  
  
ReactDOM.render(<App/>, document.getElementById("root"));