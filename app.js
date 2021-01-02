class App extends React.Component {
  state={hotelsData,
    country:[],
    price:[],
    room:[]
  };

  handleChangeCountry = (e) =>{
    this.setState({country : e.target.value});
  }
  handleChangePrice = (e) =>{
    this.setState({price : parseInt(e.target.value)});
  }
  handleChangeRoom = (e) =>{
    this.setState({room : parseInt(e.target.value)});
  }

  render(){
    const {hotelsData, country, price, room} = this.state;
    const filterCard =hotelsData.filter(x => (x.country === country && x.price === price && x.rooms === room));
    const cards = filterCard.map((card,index) =>(
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
      console.log(this.state.country);
    return (
      <div className="app">
        <div className="jumbotron">
          <h1>Reserva Alojamiento</h1>
          <p>Desde el <strong>martes, 1 de Enero de 2019</strong> hasta el <strong>miercoles, 2 de Enero de 2019</strong></p>
        </div>
        <div>
          <Filter 
            handleChangeCountry={this.handleChangeCountry}
            handleChangePrice={this.handleChangePrice}
            handleChangeRoom={this.handleChangeRoom}
            stateArray={hotelsData}
          />
        </div>        
        <div className="container">
          <form>
            <select onChange={this.handleChangeCountry}>
              <option value="Argentina">Argentina</option>
              <option value="Brasil">Brasil</option>
              <option value="Chile">Chile</option>
            </select>
            <select onChange={this.handleChangePrice}>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
            </select>
          </form>
          <p>Aqui va  el resultado: {this.state.price}</p>
          <div className="row">
            {cards}
          </div>          
        </div>             
                        
      </div>
    );
  }      
}  
  
ReactDOM.render(<App/>, document.getElementById("root"));