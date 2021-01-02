//const prices = ["$","$$","$$$","$$$$"];


function Prices (){
    return(
        <div>
            <form>
                <select className="form-control">
                <option selected disabled hidden>Precios</option>
                    {prices.map((price,index)=>(
                        <option key={index} value={price}>
                            {price}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    )
}