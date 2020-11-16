// ticketGeneratorBtn
var btnGenera = document.getElementById('btn-genera');


btnGenera.addEventListener("click", function () {
  var offer = document.getElementById('offer');
  // Genera Ticket
  console.log("Genera il Ticket");

  // Selezionare valore degli input
  var fullNameInput = document.getElementById('full-name');
  var kmInput = document.getElementById('km');
  var fasciaInput = document.getElementById('fascia');

  // Seleziona i valori
  var fullName = fullNameInput.value;
  var km = kmInput.value;
  var fascia = fasciaInput.value;

  console.log(fullName, km, fascia);

  // Calcolo biglietto Treno
  var costPerKm = 0.21;
  var ticketPrice = costPerKm * km;
  console.log(ticketPrice);

  if(fascia == "minorenne"){
    console.log("Applica 20% di sconto");
    offer = "Sconto <br> Minorenni";
    var lowPriceDiscount = (ticketPrice * 80) /100; //sconto 20%
    var finalPrice = lowPriceDiscount;
  }else if (fascia == "over65") {
    console.log("Applica 40% di sconto");
    offer = "Sconto <br> Over 65";
    var highPriceDiscount = (ticketPrice * 60) /100; //sconto 40%
    var finalPrice = highPriceDiscount;
  }else if (fascia == "maggiorenne") {
    offer = "Tariffa <br> Standard";
    var finalPrice = ticketPrice
  } else {
    var finalPrice = "0"
  }

  // Inserire dati nel BIGLIETTO
  var ticketName = document.getElementById('nome-passeggero');
  var ticketSconto = document.getElementById('sconto');
  var ticketCarrozza = document.getElementById('carrozza');
  var ticketCodice = document.getElementById('codice-cp');
  var priceTicket = document.getElementById('ticket-price');

  // Genera numero Carrozza
  var numberCarrozza = Math.floor(Math.random() * 19) + 1 ;
  var codiceCp = Math.floor(Math.random() * (100000 - 90000)) + 90000 ;

  // Inserire dati nel BIGLIETTO
  ticketName.innerHTML = fullName;
  ticketSconto.innerHTML = offer;
  priceTicket.innerHTML = "€" + Math.round(finalPrice);
  ticketCarrozza.innerHTML = numberCarrozza;
  ticketCodice.innerHTML = codiceCp;
})


// undoBtn
var btnAnnulla = document.getElementById('btn-annulla');

btnAnnulla.addEventListener("click", function () {
  // Annulla
  console.log("Annula operazione");
  // document.getElementById('biglietto').style.display = "none";

  var fullNameInput = document.getElementById('full-name');
  var kmInput = document.getElementById('km');
  var fasciaInput = document.getElementById('fascia');

  // reset calcolo ticket
  fullNameInput.value = "";
  kmInput.value = "";
  fasciaInput.value = "vuoto";

  // reset ticket
  var ticketName = document.getElementById('nome-passeggero');
  var ticketSconto = document.getElementById('sconto');
  var ticketCarrozza = document.getElementById('carrozza');
  var ticketCodice = document.getElementById('codice-cp');
  var priceTicket = document.getElementById('ticket-price');

  ticketName.innerHTML = "";
  ticketSconto.innerHTML = "";
  priceTicket.innerHTML = "";
  ticketCarrozza.innerHTML = "";
  ticketCodice.innerHTML = "";
})
