class Filtros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelsData,
            countrys:["Todos los paises","Argentina","Brasil", "Chile","Uruguay","Mexico"],
            prices:["Todos los precios","$","$$","$$$","$$$$"],
            sizes:["Todos los tamaños", "Pequeño", "Mediano","Grande"]
        }  
                           
    }   
    render(){
        return(
            <div className="form row filtro">
                <div className="form-group col-sm-3">
                    <input className="form-control input-field" type="date" name="infentrada" />
                </div>
                <div className="form-group col-sm-3">
                    <input className="form-control input-field" type="date" name="infsalida" />
                </div>
                <div className="form-group col-sm-2">
                    <select className="form-control" >
                        {this.state.countrys.map((country,index)=> 
                        {return(<option key={index} value={country}>{country}</option>)})}
                    </select>
                </div>
                <div className="form-group col-sm-2">
                    <select className="form-control">
                        {this.state.prices.map((price,index)=>
                        {return(<option key={index} value={price}>{price}</option>)})}
                    </select>
                </div>
                <div className="form-group col-sm-2">
                    <select className="form-control">
                        {this.state.sizes.map((size,index)=>
                        {return(<option key={index} value={size}>{size}</option>)})}
                    </select>
                </div>
            </div>            
        );
    }
}
