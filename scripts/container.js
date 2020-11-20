class Container extends React.Component { 
    constructor(props){
      super(props);
  
      this.state;
    }       
      render() {
        return (
          <div className="container">
              <div className="row">
              {hotelsData.map((item,index)=>{
                return(
                  <Contenedor item={item} key={index}/>                
                  )})
              }              
              </div>                              
          </div>
        );
      }
    }