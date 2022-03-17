import React from "react";


function Alert() {
  return (
    <div className="home">
       <div className="container">     
         <div className="row align-items-center my-5">
            <div className="col-lg-12">   
                <h1 className="font-weight-light">C'è qualche problema ? </h1> 
                    <p>
                    Il dispositivo HuskyMe! ti permette di ricevere segnalazioni di eventuali anomalie relative alla salute del tuo cane: battiti cardiaci alterati o picchi di pressione alta, inviano dei segnali al tuo cellular per avvisarti che il tuo animale non sta bene.
                    </p>
            </div>
            <div className="col-lg-12">
               <iframe className="responsive-iframe"  height="500" Style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"  src="https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-fejtr/embed/charts?id=40696db1-a55d-47e8-ac3e-2911b2a72cb5&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
            
            </div>
               
      </div>
    </div>
    </div>

  );
}

export default Alert;
