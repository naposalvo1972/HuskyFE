import React, { useEffect, useState } from "react";

function Home() {
 
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <h2 Style="">HUSKY ME!</h2>
          <div className="col-lg-12">
          <img Style="width:30%" src="img/dog-dog-fun.gif" />
          </div>
          <section Style="min-height:500px" class="bg-it-3 bg-spostamento" id="spostamento">
            <div class="container-fluid">
            <h2 class="text-32 text-white col-lg-6 pl-0">
              <small>Spostamenti</small> </h2>
              <img Style="width:50%" src="mappa.jpg" />
          </div>

          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
