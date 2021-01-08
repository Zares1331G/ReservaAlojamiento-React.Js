moment.locale('es');
const now = moment().format("LL");
const last = moment().format("LL");



class App extends React.Component {
  state={
    result:[...hotelsData],
    country:"",
    price:"Todos los precios",
    room:"Todos los tamaños",
    firstDate: new Date().valueOf(),
    secondDate: new Date().valueOf() + 3456000000
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
    if(e.target.name === "firstDate" || e.target.name === "secondDate"){      
      this.setState({[e.target.name] : parseInt(moment(e.target.value).valueOf())})
    }else{
      this.setState({[e.target.name] : e.target.value})
    }
  }

  render(){
    moment.locale("es");
    const{country, result, price, room, firstDate, secondDate}=this.state;
    const {handleChange}=this;
    var box = [];
    var timeFirst = moment(firstDate).format("LL");
    var timeSecond = moment(secondDate).format("LL");

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
    
    const filterDate = result.filter(x => x.availabilityFrom >= firstDate && x.availabilityTo <= secondDate)
    const cards = filterDate.length > 0 ? 
    box.map((card,index) =>(
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
    )) : <h1>No hay reservas para las fechas seleccionadas</h1>
    
    return (      
      <div className="app">        
        <Header 
        timeFirst={timeFirst}
        timeSecond={timeSecond}
        />
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