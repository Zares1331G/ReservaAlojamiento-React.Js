const sizes = ["Todos los tamaños", "Pequeño", "Mediano","Grande"];

function Sizes (props){
    return(
        <div>
            <select className="form-control">
                {sizes.map((size,index)=>(
                    <option key={index} value={size}>
                        {size}
                    </option>
                ))}
            </select>
        </div>
    )
}