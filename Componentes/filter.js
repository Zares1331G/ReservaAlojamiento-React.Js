const countrys = ["Argentina","Brasil", "Chile","Uruguay","Mexico"];
const prices = ["$","$$","$$$","$$$$"];
const sizes = [4, 8, 9, 11,14 , 16, 19, 20, 21, 22, 23, 25, 32, 40, 42];
const pricesNum = [1, 2, 3, 4];

function Filter (props) {
  const {handleChangeCountry, handleChangePrice, handleChangeRoom}=props;
  return(
    <div className="form row filtro">
      <div className="form-group col-sm-3">
        <Date />
      </div>
      <div className="form-group col-sm-3">
        <Date />
      </div>
      <div className="form-group col-sm-2">
        {/* <Countrys 
          handleChangeCountry={handleChangeCountry}
          stateArray={stateArray}
          /> */}
        <form>
          <select className="form-control" onChange={handleChangeCountry}>
              <option selected disabled hidden>Paises</option>
              {countrys.map((country,index)=>(
                  <option key={index} value={country}>
                            {country}
                  </option>
              ))}
          </select>        
        </form>  
      </div>
      <div className="form-group col-sm-2">
        {/* <Prices /> */}
        <form>
          <select className="form-control" onChange={handleChangePrice}>
            <option selected disabled hidden>Precios</option>
                {pricesNum.map((price,index)=>(
                  <option key={index} value={price}>
                    {price}
                  </option>
                ))}
            </select>
        </form>
      </div>
      <div className="form-group col-sm-2">
        {/* <Sizes /> */}
        <form>
          <select className="form-control" onChange={handleChangeRoom}>
            <option selected disabled hidden>Cuartos</option>
              {sizes.map((size,index)=>(
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
          </select>
        </form>
      </div>   
          
    </div>
  )
}

