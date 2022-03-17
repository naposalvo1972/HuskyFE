import React from "react";

function Spostamenti() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
        <div className="col-lg-12">
            <h1 className="font-weight-light">Dove sta il mio cane ?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-lg-12">
          <iframe className="responsive-iframe"  height="500" Style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"  src="https://charts.mongodb.com/charts-sogeihack_2-23-22-eworksh-fejtr/embed/charts?id=622f5676-a038-4ac2-82dc-c27832e9f121&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Spostamenti;
