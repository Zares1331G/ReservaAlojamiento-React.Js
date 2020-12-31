const countrys = ["Todos los paises","Argentina","Brasil", "Chile","Uruguay","Mexico"];


function Countrys (props){    
    return(
        <div>
            <select className="form-control" value="Todos los paises" >
                {countrys.map((country,index)=>(
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
            </select>
            
        </div>
    )
}

{/* {countrys.map((country, index) =>(
                    <Option
                        key={index}
                        value={country.countrys}>
                    {country.countrys}</Option>
                ))} */}
 
          //       value={this.state.country} 
          //       onChange={this.handleChangeCountry} >
          //           {countrys.map((country,index)=> 
          //           {return(<option key={index} value={country}>{country}</option>)})}
          //       </select>