import React, { useEffect, useState } from "react";

function Home() {
  const[numero1] = useState(null);
  useEffect(()=>{
    var opts = {
      headers: {
        'mode':'no-cors'
      }
    }
  const datamdb =  fetch('http://ec2-52-47-162-19.eu-west-3.compute.amazonaws.com:8080/ciao',opts)
  .then(response => response.json())
  .then(data =>{ 
    this.setState({numero1:data.numero})  
   
  
  })},[]);
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div clclassNameass="col-lg-7">
          {
             numero1
          }
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Home page</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
