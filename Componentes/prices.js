const prices = ["Todos los precios","$","$$","$$$","$$$$"];


function Prices (props){
    const {country} = props;
    return(
        <div>
            <select className="form-control">
                {prices.map((price,index)=>(
                    <option key={index} value={price}>
                        {price}
                    </option>
                ))}
            </select>
        </div>
    )
}