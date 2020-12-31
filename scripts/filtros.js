const countrys = ["Todos los paises","Argentina","Brasil", "Chile","Uruguay","Mexico"];
const prices = ["Todos los precios","$","$$","$$$","$$$$"];
const sizes = ["Todos los tamaños", "Pequeño", "Mediano","Grande"];

class Filtros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {country: "Todos los paises"}
        this.state = {price : "Todos los precios"}
        this.state = {size : "Todos los tamaños"}       
    }
    
      handleChangeCountry = (event) => {
        this.setState({country: event.target.value});
        }
      handleChangePrice = (event) => {
        this.setState({price: event.target.value});
        }
      handleChangeSize = (event) => {
        this.setState({size: event.target.value});
        }
    
     
      render() {
        return (
          <div className="form row filtro">
              <div className="form-group col-sm-3">
                    <input className="form-control input-field" type="date" name="infentrada" />
                </div>
                <div className="form-group col-sm-3">
                    <input className="form-control input-field" type="date" name="infsalida" />
                </div>
            <div className="form-group col-sm-2">
                <select className="form-control" value={this.state.country} onChange={this.handleChangeCountry} >
                    {countrys.map((country,index)=> 
                    {return(<option key={index} value={country}>{country}</option>)})}
                </select>
            </div>
            <div className="form-group col-sm-2">
                <select className="form-control" value={this.state.price} onChange={this.handleChangePrice}>
                    {prices.map((price,index)=>
                    {return(<option key={index} value={price}>{price}</option>)})}
                </select>
            </div>
            <div className="form-group col-sm-2">
                <select className="form-control" value={this.state.size} onChange={this.handleChangeSize}>
                    {sizes.map((size,index)=>
                    {return(<option key={index} value={size}>{size}</option>)})}
                </select>
            </div>
            
          </div>
        );
      }
}
