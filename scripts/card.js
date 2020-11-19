function Contenedor(props){
    return(
        
        <div className="col-sm-4 d-flex flex-wrap">
            <div className="card dflex flex-column justify-content-between">
                <div>                   
                    <img className="photos" src={props.item.photo} width="100%"/>
                </div>    
                <div className="card-body">
                    <h4>{props.item.name}</h4>
                    <p>{props.item.description}</p>
                    <p>{props.item.city}, {props.item.country}.</p>
                    <p>{props.item.rooms} Habitaciones.</p>
                    <p>Precio {props.item.price}</p>
                </div>               
                <div>
                    <button className="btn btn-primary"><ion-icon class="icon" name="rocket-outline"></ion-icon>Reservar!</button>
                </div>           
            </div>            
        </div>        
    );
}

