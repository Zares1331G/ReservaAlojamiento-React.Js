// const sizes = ["Pequeño", "Mediano","Grande"];

function Sizes (){
    return(
        <div>
            <form>
                <select className="form-control">
                <option selected disabled hidden>Tamaños</option>
                    {sizes.map((size,index)=>(
                        <option key={index} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    )
}