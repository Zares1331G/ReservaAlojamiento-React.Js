class App extends React.Component {
  state={
    result:[...hotelsData],
    country:"",
    price:0,
    room:"Todos los tamaños"
  };
  
  handleChange = (e) =>{
    this.setState({[e.target.name] : e.target.value})
  }

  render(){
    const{country, result, price}=this.state;
    var box = [];
    if(country === ""){
      box = result;
    }else{
      box =result.filter(x => x.country === country);
    }
    if(price > 0){
      box = box.filter(x => x.price === parseInt(price,0));
    }
    if(room !== "Todos los tamaños"){
      box = box.filter(x => x.rooms );
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
        <Filter 
          handleChange={handleChange}
        />
        <div className="container">
          <p>Aqui se vera lo que se carga: {this.state.country} + prices: {this.state.price}</p>
          <div className="row">
            {cards}
          </div>          
        </div>
      </div>
    );
  }      
}  
  
ReactDOM.render(<App/>, document.getElementById("root"));