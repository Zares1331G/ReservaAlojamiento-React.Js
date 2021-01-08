

function Header (props) {
    
    const{timeSecond, timeFirst}=props;
   return(
    <div className="jumbotron">
        <h1>Reserva Alojamiento</h1>
        <p>Desde el <strong>{timeFirst}</strong> hasta el <strong>{timeSecond}</strong></p>
    </div>
   )
}