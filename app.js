class App extends React.Component {
  state={hotelsData};



  render(){
    const cards = this.state.hotelsData.map((card,index) =>(
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
        <div className="jumbotron">
          <h1>Reserva Alojamiento</h1>
          <p>Desde el <strong>martes, 1 de Enero de 2019</strong> hasta el <strong>miercoles, 2 de Enero de 2019</strong></p>
        </div>
        <div>
          <Filtros info={this.state.hotelsData} />
        </div>        
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