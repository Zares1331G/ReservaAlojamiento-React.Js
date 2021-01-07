

function Header (props) {
    
    const{firstDate, secondDate}=props;
   return(
    <div className="jumbotron">
        <h1>Reserva Alojamiento</h1>
        <p>Desde el <strong>{firstDate}</strong> hasta el <strong>{secondDate}</strong></p>
    </div>
   )
}