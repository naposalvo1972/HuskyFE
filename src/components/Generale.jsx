import React from "react";


function Generale() {
  return (
    <div className="about">
      <div className="container">
      
      <div className="row align-items-center my-5">
        <div className="col-lg-12">
          <h1 className="font-weight-light">Situazione generale </h1>
          <p>
             Riepilogo giornaliero delle attività motorie e di monitoraggio della salute del tuo animale.
          </p>
        </div>
      </div>
      <div className="row align-items-center my-5">
        <div className="col-lg-6">
           <iframe className="responsive-iframe" height="300" Style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"  src="https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-fejtr/embed/charts?id=62330af9-cb8a-495f-868c-1d32093e7e9e&maxDataAge=3600&theme=light&autoRefresh=true"></iframe> 
        </div>
        <div className="col-lg-6">
           <iframe className="responsive-iframe" height="300" Style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"  src="https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-fejtr/embed/charts?id=34f44995-331f-425b-8ea9-8fa273eaf7d8&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
           
        </div>

      </div>
      <div className="row align-items-center my-5">
        <div className="col-lg-4">
           <iframe className="responsive-iframe" height="400"  Style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"  src="https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-fejtr/embed/charts?id=6232fcf3-a4e5-466e-8547-8e6863764aaf&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>   
        </div>
        <div className="col-lg-4">
           <iframe className="responsive-iframe" height="400" Style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" src="https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-fejtr/embed/charts?id=efa64c3a-a5c7-4061-945e-a914a8f3857d&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
           
        </div>
        <div className="col-lg-4">
        <iframe className="responsive-iframe"  height="400" Style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"  src="https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-fejtr/embed/charts?id=a6af02bc-8e6f-4c09-9279-3ea46ff7876b&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
        </div>
        

      </div>
    </div>
    
  </div>
  );
}

export default Generale;
