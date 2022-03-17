import React from "react";

function PressioneBattito() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-12">
              <h1 className="font-weight-light">Come sta ? Pressione e Battito</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          <div className="col-lg-6">
             <iframe className="responsive-iframe" height="500" Style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" src="https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-fejtr/embed/charts?id=622f5c0d-f865-4a30-8967-66f75006cf60&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
            
          </div>
          <div className="col-lg-6">
             <iframe className="responsive-iframe" height="500" Style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"  src="https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-fejtr/embed/charts?id=6231cbf5-aa9e-4bf6-8cf9-1abd29fff658&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressioneBattito;
