const countrys = ["Argentina","Brasil", "Chile","Uruguay"];
const prices = ["Todos los precios", "$","$$","$$$","$$$$"];
const rooms = ["Todos los tamaños", "Pequeño", "Mediano", "Grande"];

/*
Tamaño de los cuartos
pequeño <= 10
mediano <= 20
grande > 20
*/

class Filter extends React.Component{

  render(){
    const {handleChange}=this.props;

    return(
      <div className="form row filtro">
        <div className="form-group col-sm-3">
            <input 
            id="entrada"
            className="form-control input-field" 
            type="date" 
            name="firstDate"
            onChange={handleChange}
            />
        </div>
        <div className="form-group col-sm-3">
            <input 
            id="entrada"
            className="form-control input-field" 
            type="date" 
            name="secondDate"
            onChange={handleChange}
            />
        </div>
        <div className="form-group col-sm-2">        
          <select className="form-control" name="country" onChange={handleChange}>
            <option selected disabled hidden>Paises</option>
              <option value="">Todos los paises</option>
                {countrys.map((country,index)=>(
                  <option key={index} value={country}>
                    {country}
                  </option> 
                ))}
          </select>
        </div>
        <div className="form-group col-sm-2">
          <form>
            <select className="form-control" name="price" onChange={handleChange}>
              <option selected disabled hidden>Precios</option>
                  {prices.map((price,index)=>(
                    <option key={index} value={price}>
                      {price}
                    </option>
                  ))}
              </select>
          </form>
        </div>
        <div className="form-group col-sm-2">
          <form>
            <select className="form-control" name="room" onChange={handleChange}>
              <option selected disabled hidden>Tamaño</option>
                {rooms.map((room,index)=>(
                  <option key={index} value={room}>
                    {room}
                  </option>
                ))}
            </select>
          </form> 
        </div>   
      </div>
    )  
  }
}
