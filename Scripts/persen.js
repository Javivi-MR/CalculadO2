function calculaJSON(){
    fetch('./Scripts/personal.json') //obtenemos el json
    .then(response => response.json())
    .then(data =>{ calculaDATA(data);}); //llamada a la funcion calulaDATA con los datos del json
}

function calculaDATA(database){

//________________________ENVASES_____________________________________



    var botella500ml = document.getElementById("envp500").value;
    botella500ml = parseFloat(botella500ml.replaceAll(',', '.'));

    var botella1l = document.getElementById("envp1000").value;
    botella1l = parseFloat(botella1l.replaceAll(',', '.'));

    var botella15l = document.getElementById("envp1500").value;
    botella15l = parseFloat(botella15l.replaceAll(',', '.'));

    var botella2l = document.getElementById("envp2000").value;
    botella2l = parseFloat(botella2l.replaceAll(',', '.'));

    var botella5l = document.getElementById("envp5000").value;
    botella5l = parseFloat(botella5l.replaceAll(',', '.'));

    var botella8l = document.getElementById("envp8000").value;
    botella8l = parseFloat(botella8l.replaceAll(',', '.'));

    var botellin33cl = document.getElementById("envc330").value;
    botellin33cl = parseFloat(botellin33cl.replaceAll(',', '.'));

    var botellin50cl = document.getElementById("envc500").value;
    botellin50cl = parseFloat(botellin50cl.replaceAll(',', '.'));

    var botellin1l = document.getElementById("envc1000").value;
    botellin1l = parseFloat(botellin1l.replaceAll(',', '.'));

    var lata33cl = document.getElementById("enva330").value;
    lata33cl = parseFloat(lata33cl.replaceAll(',', '.'));

    var lata50cl = document.getElementById("enva500").value;
    lata50cl = parseFloat(lata50cl.replaceAll(',', '.'));

    var co2botella500ml = botella500ml * database.Envases.Botella500ml;
    var co2botella1l = botella1l * database.Envases.Botella1l;
    var co2botella15l = botella15l * database.Envases.Botella15l;
    var co2botella2l = botella2l * database.Envases.Botella2l;
    var co2botella5l = botella5l * database.Envases.Botella5l;
    var co2botella8l = botella8l * database.Envases.Botella8l;
    var co2botellin33cl = botellin33cl * database.Envases.Botellin33cl;
    var co2botellin50cl = botellin50cl * database.Envases.Botellin50cl;
    var co2botellin1l = botellin1l * database.Envases.Botellin1l;
    var co2lata33cl = lata33cl * database.Envases.Lata33cl;
    var co2lata50cl = lata50cl * database.Envases.Lata50cl;

    var co2Envases = co2botella500ml + co2botella1l + co2botella15l + co2botella2l + co2botella5l + co2botella8l + co2botellin33cl + co2botellin50cl + co2botellin1l + co2lata33cl + co2lata50cl;


//________________________ENERGÍA_____________________________________

    var gasoil = document.getElementById("gasoilp").value;
    gasoil = parseFloat(gasoil.replaceAll(',', '.'));

    var gasnatural = document.getElementById("gasnaturalp").value;
    gasnatural = parseFloat(gasnatural.replaceAll(',', '.'));

    var biomasanormal = document.getElementById("bionormalp").value;
    biomasanormal = parseFloat(biomasanormal.replaceAll(',', '.'));

    var biomasacombustion = document.getElementById("biocombustionp").value;
    biomasacombustion = parseFloat(biomasacombustion.replaceAll(',', '.'));

    var indeterminada = document.getElementById("indeterminadap").value;
    indeterminada = parseFloat(indeterminada.replaceAll(',', '.'));

    var renovable = document.getElementById("renovablep").value;
    renovable = parseFloat(renovable.replaceAll(',', '.'));


    var co2gasoil = gasoil * database.Energia.Gasoil;
    var co2gasnatural = gasnatural * database.Energia.GasNatural;
    var co2biomasanormal = biomasanormal * database.Energia.BiomasaNormal;
    var co2biomasacombustion = biomasacombustion * database.Energia.BiomasaCombustion;
    var co2indeterminada = indeterminada * database.Energia.Indeterminada;
    var co2renovable = renovable * database.Energia.Renovable;


    var co2Energia = co2gasoil + co2gasnatural + co2biomasanormal + co2biomasacombustion + co2indeterminada + co2renovable;





//________________________TRANSPORTE_________________________________




    var cgasolina = document.getElementById("cgasolinap").value;
    cgasolina = parseFloat(cgasolina.replaceAll(',', '.'));
    var cdiesel = document.getElementById("cdieselp").value;
    cdiesel = parseFloat(cdiesel.replaceAll(',', '.'));
    var mgasolina = document.getElementById("mgasolinap").value;
    mgasolina = parseFloat(mgasolina.replaceAll(',', '.'));
    var mdiesel = document.getElementById("mdieselp").value;
    mdiesel = parseFloat(mdiesel.replaceAll(',', '.'));
    var bus = document.getElementById("busp").value;
    bus = parseFloat(bus.replaceAll(',', '.'));
    var co2cgasolina = cgasolina * database.Transporte.CGasolina;
    var co2cdiesel = cdiesel * database.Transporte.CDiesel;
    var co2mgasolina = mgasolina * database.Transporte.MGasolina;
    var co2mdiesel = mdiesel * database.Transporte.MDiesel;
    var co2bus = bus * database.Transporte.Bus;

    var co2Transporte = co2cgasolina + co2cdiesel + co2mgasolina + co2mdiesel + co2bus;





//_____________________BUENAS PRÁCTICAS_____________________________________________


    var botella500ml = document.getElementById("envp500p").value;
    botella500ml = parseFloat(botella500ml.replaceAll(',', '.'));
    var botella1l = document.getElementById("envp1000p").value;
    botella1l = parseFloat(botella1l.replaceAll(',', '.'));
    var botella15l = document.getElementById("envp1500p").value;
    botella15l = parseFloat(botella15l.replaceAll(',', '.'));
    var botella2l = document.getElementById("envp2000p").value;
    botella2l = parseFloat(botella2l.replaceAll(',', '.'));
    var botella5l = document.getElementById("envp5000p").value;
    botella5l = parseFloat(botella5l.replaceAll(',', '.'));
    var botella8l = document.getElementById("envp8000p").value;
    botella8l = parseFloat(botella8l.replaceAll(',', '.'));
    var botellin33cl = document.getElementById("envc330p").value;
    botellin33cl = parseFloat(botellin33cl.replaceAll(',', '.'));
    var botellin50cl = document.getElementById("envc500p").value;
    botellin50cl = parseFloat(botellin50cl.replaceAll(',', '.'));
    var botellin1l = document.getElementById("envc1000p").value;
    botellin1l = parseFloat(botellin1l.replaceAll(',', '.'));
    var lata33cl = document.getElementById("enva330p").value;
    lata33cl = parseFloat(lata33cl.replaceAll(',', '.'));
    var lata50cl = document.getElementById("enva500p").value;
    lata50cl = parseFloat(lata50cl.replaceAll(',', '.'));

    var co2botella500mlrec = botella500ml * database.Practicas.Botella500ml;
    var co2botella1lrec = botella1l * database.Practicas.Botella1l;
    var co2botella15lrec = botella15l * database.Practicas.Botella15l;
    var co2botella2lrec = botella2l * database.Practicas.Botella2l;
    var co2botella5lrec = botella5l * database.Practicas.Botella5l;
    var co2botella8lrec = botella8l * database.Practicas.Botella8l;
    var co2botellin33clrec = botellin33cl * database.Practicas.Botellin33cl;
    var co2botellin50clrec = botellin50cl * database.Practicas.Botellin500ml;
    var co2botellin1lrec = botellin1l * database.Practicas.Botellin1l;
    var co2lata33clrec = lata33cl * database.Practicas.Lata33cl;
    var co2lata50clrec = lata50cl * database.Practicas.Lata500ml;

    var co2Reciclaje = co2botella500mlrec + co2botella1lrec + co2botella15lrec + co2botella2lrec + co2botella5lrec + co2botella8lrec + co2botellin33clrec + co2botellin50clrec + co2botellin1lrec + co2lata33clrec + co2lata50clrec;

    var andar = document.getElementById("andarp").value;
    andar = parseFloat(andar.replaceAll(',', '.'));
    var cochelec = document.getElementById("cochelecp").value;
    cochelec = parseFloat(cochelec.replaceAll(',', '.'));
    var buselec = document.getElementById("buselecp").value;
    buselec = parseFloat(buselec.replaceAll(',', '.'));
    var bici = document.getElementById("bicip").value;
    bici = parseFloat(bici.replaceAll(',', '.'));
    var motoelec = document.getElementById("motoelecp").value;
    motoelec = parseFloat(motoelec.replaceAll(',', '.'));
    var co2andar = andar * database.Practicas.Andar;
    var co2cochelec = cochelec * database.Practicas.CocheElec;
    var co2buselec = buselec * database.Practicas.BusElec;
    var co2bici = bici * database.Practicas.Bici;
    var co2motoelec = motoelec * database.Practicas.MotoElec;

    var co2TransportePracticas = co2andar + co2cochelec + co2buselec + co2bici + co2motoelec;

    var electrica = document.getElementById("energiap").value;
    electrica = parseFloat(electrica.replaceAll(',', '.'));
    var co2EnergiaPracticas = electrica * database.Practicas.Electricapropia;


    var co2Practicas = co2EnergiaPracticas + co2TransportePracticas + co2Reciclaje;

    
//___________________________________________________________RESULTADOS CON DESGLOSE:________________________________________________________________________________________________________________________________
 

    (document.getElementById("desgloseEnvases").innerHTML= "You've emited " + parseFloat(co2Envases).toFixed(3).replace('.', ',') + " kgs de CO<sub>2</sub> because of the containers you've used");
    (document.getElementById("desgloseEnergía").innerHTML= "You've emited " + parseFloat(co2Energia).toFixed(3).replace('.', ',') + " kgs de CO<sub>2</sub> because of the energy you've consumed");
    (document.getElementById("desgloseTransporte").innerHTML= "You've emited " + parseFloat(co2Transporte).toFixed(3).replace('.', ',') + " kgs de CO<sub>2</sub> because of the transports you've used");
    if(co2Practicas != 0)
    {
        (document.getElementById("desglosePrácticas").innerHTML= "Congratulations! Your good habits have reduced your consumption by " + parseFloat(Math.abs(co2Practicas)).toFixed(3).replace('.', ',') + " kgs of CO<sub>2</sub><br>(By using transport or energy options at Good Habits, you don't produce any CO<sub>2)");
    }
    else
    {
        (document.getElementById("desglosePrácticas").innerHTML= "Congratulations! Your good habits have produced 0 kgs of CO<sub>2</sub><br>(By using transport or energy options at Good Habits, you don't produce any CO<sub>2)");
    }
    



    total = co2Envases + co2Energia + co2Transporte + co2Reciclaje + co2TransportePracticas + co2EnergiaPracticas;
    (document.getElementById("demo").innerHTML= "You've comsumed " + parseFloat(total).toFixed(3).replace('.', ',') + " kgs of CO<sub>2</sub>");
}