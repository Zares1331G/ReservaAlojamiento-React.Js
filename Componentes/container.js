function Container(props){
    const {photo, name, description, city, country, room, price}=props;
    return(        
        <div className="col-sm-4 d-flex flex-wrap">
            <div className="card dflex flex-column justify-content-between">
                <div>                   
                    <img className="photos" src={photo} width="100%"/>
                </div>    
                <div className="card-body">
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p>{city}, {country}.</p>
                    <p>{room} Habitaciones.</p>
                    <p>Precio {price}</p>
                </div>               
                <div>
                    <button className="btn btn-primary"><ion-icon class="icon" name="rocket-outline"></ion-icon>Reservar!</button>
                </div>           
            </div>            
        </div>        
    );    
}

