const countrys = ["Todos los paises","Argentina","Brasil", "Chile","Uruguay","Mexico"];
const prices = ["Todos los precios","$","$$","$$$","$$$$"];
const sizes = ["Todos los tamaños", "Pequeño", "Mediano","Grande"];

this.state = {country: "Todos los paises"}
        this.state = {price : "Todos los precios"}
        this.state = {size : "Todos los tamaños"}

function Filtros (props) {
  const {info} = props;
  return(
    <div className="form row filtro">
      <div className="form-group col-sm-3">
        <Date />
      </div>
      <div className="form-group col-sm-3">
        <Date />
      </div>
      <div className="form-group col-sm-2">
        <Countrys country={info}/>
      </div>
      <div className="form-group col-sm-2">
        <Prices />
      </div>
      <div className="form-group col-sm-2">
        <Sizes />
      </div>       
    </div>
  )
}

//<div className="form row filtro">          //     
          //   <div className="form-group col-sm-2">              
          //       <select 
          //       className="form-control" 
          //       value={this.state.country} 
          //       onChange={this.handleChangeCountry} >
          //           {countrys.map((country,index)=> 
          //           {return(<option key={index} value={country}>{country}</option>)})}
          //       </select>
          //   </div>
          //   <div className="form-group col-sm-2">
          //       {/* <select className="form-control" value={this.state.price} onChange={this.handleChangePrice}>
          //           {prices.map((price,index)=>
          //           {return(<option key={index} value={price}>{price}</option>)})}
          //       </select> */}
          //   </div>
          //   <div className="form-group col-sm-2">
          //       {/* <select className="form-control" value={this.state.size} onChange={this.handleChangeSize}>
          //           {sizes.map((size,index)=>
          //           {return(
          //           <option 
          //           key={index} 
          //           value={size}>                      
          //           {size}</option>)})}
          //       </select> */}
