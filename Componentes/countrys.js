const countrys = ["Argentina","Brasil", "Chile","Uruguay","Mexico"];


function Countrys (){  
    return(
        <div>
            <form>
                <select className="form-control" >
                    <option selected disabled hidden>Paises</option>
                    <option >Todos los paises</option>
                    {countrys.map((country,index)=>(
                        <option key={index} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </form>            
        </div>
    )
}

//onChange={props.handleCountry}