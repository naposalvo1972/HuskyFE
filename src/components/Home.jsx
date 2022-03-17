import React, { useEffect, useState } from "react";

function Home() {
 
  return (
    <div Style="overflow-x: hidden;">
      <div id="home">
        <section Style="min-height:500px" class="bg-it-azure" id="heroimage">
          <div className="row align-items-center">
           
            <div className="col-lg-12">
              <h2>HUSKY ME!</h2>
              <img className="img-husky" src="img/dog-dog-fun.gif" />
              <p>Husky Me! è il primo dispositivo che unisce la localizzazione GPS in tempo reale e il monitoraggio dell'attività motoria. Una tecnologia pensata e realizzata per gli amanti degli amici a 4 zampe</p>
              <a href="generale" className="link-arrow text-black mt-5 mx-2">Scopri di più<span className="sr-only"> su come sta</span><i class="fa fa-arrow-right text-black mx-2"></i></a>
            </div>
          </div>
        </section>
        <section Style="min-height:500px" class="bg-it-3" id="spostamento">
              <div class="container-fluid">
                <h2 class="text-32 text-white col-lg-6 pl-0">
                <small>Come sta ?</small> </h2>
                <img className="img-husky" src="img/salutecane.png" />
                <p className="text-white">HuskyMe! riconosce l'attività motoria del tuo amico e ti fornisce informazioni sul comportamento del tuo animale nell'arco della sua giornata
Grazie ai sensori inseriti nel collare sarai sempre connesso e vicino al tuo peloso.
Riceverai aggiornamenti sul suo stato di salute e conoscerai meglio i suoi bisogni in ogni momento.</p>
                <br/>
                  <a href="comesta" className="link-arrow text-white mt-5 mx-2">Scopri di più<span className="sr-only"> su come sta</span><i class="fa fa-arrow-right text-white mx-2"></i></a>
              </div>
        </section>
        <section Style="min-height:500px"  id="dovesta">
              <div class="container-fluid">
                <h2 class="text-32 text-black col-lg-6 pl-0">
                <small>Dove sta ?</small> </h2>
                <img className="img-husky" src="img/dovesta.png" />
                <p class="text-black">Con HuskyMe! il tuo amico è sempre a portata di zampa
Non temere di perderlo: grazie al GPS, puoi localizzare il tuo cucciolo in REAL TIME e a DISTANZA ILLIMITATA</p>
<br/>
                 <a href="spostamenti" className="link-arrow text-black mt-5 mx-2">Scopri di più <span className="sr-only"> su dove sta</span><i class="fa fa-arrow-right mx-2"></i></a>
              </div>
        </section>
        
        <section Style="min-height:500px" className="bg-it-acqua" id="problema">
              <div class="container-fluid">
              <h2 class="text-32 text-black col-lg-6 pl-0">
                <small>C'è qualche problema ?</small> </h2>
                <img className="img-husky" src="img/comesta1.png" />
                <p class="text-black">Il dispositivo HuskyMe! ti permette di ricevere segnalazioni di eventuali anomalie relative alla salute del tuo cane: battiti cardiaci alterati o picchi di pressione alta, inviano dei segnali al tuo cellular per avvisarti che il tuo animale non sta bene.</p>
                <a href="alert" className="link-arrow  text-black mt-5 mx-2">Scopri di più<span className="sr-only"> su come sta</span><i class="fa fa-arrow-right text-black mx-2"></i></a>
              </div>
        </section>
        <section Style="min-height:500px" className="bg-it-green" id="diario">
              <div className="container-fluid">
              <h2 className="text-32 text-black col-lg-6 pl-0">
                <small>Diario</small> </h2>
                <img className="img-husky" src="img/diario.png" />
                 <p className="text-black">Tieni sotto controllo l'alimentazione del tuo cane. Con il diario alimentare puoi inserire i pasti e le quantità del tuo cane e monitorare le calorie necessarie per il suo fabbisogno</p>
                 <a href="diario" className="link-arrow  text-black mt-5 mx-2">Scopri di più<span className="sr-only"> su come sta</span><i class="fa fa-arrow-right text-black mx-2"></i></a>
              </div>
        </section>
        </div>
      </div>
    
  );
}

export default Home;
