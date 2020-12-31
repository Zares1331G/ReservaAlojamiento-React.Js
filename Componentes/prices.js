function Prices (props){
    const {country} = props;
    return(
        <div>
            <select className="form-control">
                {country.map((country, index) =>(
                    <Option
                        key={index}
                        value={country.countrys}>
                    {country.countrys}</Option>
                ))}
            </select>
        </div>
    )
}