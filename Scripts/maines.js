


function calculaJSON(){
    fetch('./Scripts/database.json') //obtenemos el json
    .then(response => response.json())
    .then(data =>{ calulaDATA(data);}); //llamada a la funcion calulaDATA con los datos del json
}

function calulaDATA(database){
    
    
    //____________________________ENVASES______________________________________

    var envase = document.getElementById("env").value;
    envase = parseFloat(envase.replaceAll(',', '.'));
    var co2Envases = envase * database.Envases.Envase;
    var cartonypapel = document.getElementById("envpc").value;
    cartonypapel = parseFloat(cartonypapel.replaceAll(',', '.'));
    var co2Cartonypapel = cartonypapel * database.Envases.PapelyCarton;
    var vidrio = document.getElementById("envc").value;
    vidrio = parseFloat(vidrio.replaceAll(',', '.'));
    var co2Vidrio = vidrio * database.Envases.Vidrio;

    var co2EnvasesTotal = co2Envases + co2Cartonypapel + co2Vidrio;

    //____________________________ENERGIA______________________________________

    var gasoil = document.getElementById("gasoil").value;
    gasoil = parseFloat(gasoil.replaceAll(',', '.'));
    var gasnatural = document.getElementById("gasnatural").value;
    gasnatural = parseFloat(gasnatural.replaceAll(',', '.'));
    var biomasanormal = document.getElementById("bionormal").value;
    biomasanormal = parseFloat(biomasanormal.replaceAll(',', '.'));
    var biomasacombustion = document.getElementById("biocombustion").value;
    biomasacombustion = parseFloat(biomasacombustion.replaceAll(',', '.'));
    var indeterminada = document.getElementById("indeterminada").value;
    indeterminada = parseFloat(indeterminada.replaceAll(',', '.'));
    var renovable = document.getElementById("renovable").value;
    renovable = parseFloat(renovable.replaceAll(',', '.'));
    var hidraulica = document.getElementById("hidraulica").value;
    hidraulica = parseFloat(hidraulica.replaceAll(',', '.'));
    var eolica = document.getElementById("eolica").value;
    eolica = parseFloat(eolica.replaceAll(',', '.'));
    var nuclear = document.getElementById("nuclear").value;
    nuclear = parseFloat(nuclear.replaceAll(',', '.'));
    var solar = document.getElementById("solar").value;
    solar = parseFloat(solar.replaceAll(',', '.'));

    
    var co2gasoil = gasoil * database.Energia.Gasoil;
    var co2gasnatural = gasnatural * database.Energia.GasNatural;
    var co2biomasanormal = biomasanormal * database.Energia.BiomasaNormal;
    var co2biomasacombustion = biomasacombustion * database.Energia.BiomasaCombustion;
    var co2indeterminada = indeterminada * database.Energia.Indeterminada;
    var co2renovable = renovable * database.Energia.Renovable;
    var co2hidrulica = hidraulica * database.Energia.Hidraulica;
    var co2eolica = eolica * database.Energia.Eolica;
    var co2nuclear = nuclear * database.Energia.Nuclear;
    var co2solar = solar * database.Energia.Solar;


    co2Energia = co2gasoil + co2gasnatural + co2biomasanormal + co2biomasacombustion + co2hidrulica + co2eolica + co2nuclear + co2solar + co2indeterminada + co2renovable;

    //____________________________TRANSPORTE______________________________________

    var cgasolina = document.getElementById("cgasolina").value;
    cgasolina = parseFloat(cgasolina.replaceAll(',', '.'));
    var cdiesel = document.getElementById("cdiesel").value;
    cdiesel = parseFloat(cdiesel.replaceAll(',', '.'));
    var mgasolina = document.getElementById("mgasolina").value;
    mgasolina = parseFloat(mgasolina.replaceAll(',', '.'));
    var mdiesel = document.getElementById("mdiesel").value;
    mdiesel = parseFloat(mdiesel.replaceAll(',', '.'));
    var bus = document.getElementById("bus").value;
    bus = parseFloat(bus.replaceAll(',', '.'));
    camion
    var camion = document.getElementById("camion").value;
    camion = parseFloat(camion.replaceAll(',', '.'));
    var co2cgasolina = cgasolina * database.Transporte.CGasolina;
    var co2cdiesel = cdiesel * database.Transporte.CDiesel;
    var co2mgasolina = mgasolina * database.Transporte.MGasolina;
    var co2mdiesel = mdiesel * database.Transporte.MDiesel;
    var co2bus = bus * database.Transporte.Bus;
    var co2camion = camion * database.Transporte.Camion;

    co2Transporte = co2cgasolina + co2cdiesel + co2mgasolina + co2mdiesel + co2bus + co2camion;


    //____________________________BUENAS PRACTICAS______________________________________

    var palsticorec = document.getElementById("palsticorec").value;
    palsticorec = parseFloat(palsticorec.replaceAll(',', '.'));
    var papelrec = document.getElementById("papelrec").value;
    papelrec = parseFloat(papelrec.replaceAll(',', '.'));
    var vidriorec = document.getElementById("vidriorec").value;
    vidriorec = parseFloat(vidriorec.replaceAll(',', '.'));
    var co2plasticorec = palsticorec * database.Practicas.Plastico;
    var co2papelrec = papelrec * database.Practicas.Papel;
    var co2vidriorec = vidriorec * database.Practicas.Vidrio;

    co2Reciclaje = co2plasticorec + co2papelrec + co2vidriorec;

    var andar = document.getElementById("andar").value;
    andar = parseFloat(andar.replaceAll(',', '.'));
    var cochelec = document.getElementById("cochelec").value;
    cochelec = parseFloat(cochelec.replaceAll(',', '.'));
    var buselec = document.getElementById("buselec").value;
    buselec = parseFloat(buselec.replaceAll(',', '.'));
    var bici = document.getElementById("bici").value;
    bici = parseFloat(bici.replaceAll(',', '.'));
    var motoelec = document.getElementById("motoelec").value;
    motoelec = parseFloat(motoelec.replaceAll(',', '.'));
    var co2andar = andar * database.Practicas.Andar;
    var co2cochelec = cochelec * database.Practicas.CocheElec;
    var co2buselec = buselec * database.Practicas.BusElec;
    var co2bici = bici * database.Practicas.Bici;
    var co2motoelec = motoelec * database.Practicas.MotoElec;

    co2TransportePracticas = co2andar + co2cochelec + co2buselec + co2bici + co2motoelec;

    var energiaprod = document.getElementById("energiaprod").value;
    energiaprod = parseFloat(energiaprod.replaceAll(',', '.'));

    co2EnergiaPracticas =  energiaprod * database.Practicas.EnerProd;

    co2Practicas = co2Reciclaje + co2TransportePracticas + co2EnergiaPracticas;

   //___________________________________________________________RESULTADOS CON DESGLOSE:________________________________________________________________________________________________________________________________

    
    (document.getElementById("desgloseEnvases").innerHTML= "Has emitido " + parseFloat(co2EnvasesTotal).toFixed(3).replace('.', ',') + " kgs de CO<sub>2</sub> a causa de los envases utilizados");
    (document.getElementById("desgloseEnergía").innerHTML= "Has emitido " + parseFloat(co2Energia).toFixed(3).replace('.', ',') + " kgs de CO<sub>2</sub> a causa del consumo de energía");
    (document.getElementById("desgloseTransporte").innerHTML= "Has emitido " + parseFloat(co2Transporte).toFixed(3).replace('.', ',') + " kgs de CO<sub>2</sub> a causa del transporte utilizado");
    
    if(co2Practicas != 0)
    {
        (document.getElementById("desglosePrácticas").innerHTML= "¡Enhorabuena! Gracias a tus buenas prácticas has dejado de emitir " + Math.abs(co2Practicas).toFixed(3).replace('.', ',') + " kgs de CO<sub>2</sub><br>(usando las opciones de transporte o energía en Buena Prácticas, no produces CO<sub>2)");
    }
    else
    {
        (document.getElementById("desglosePrácticas").innerHTML= "¡Enhorabuena! Gracias a tus buenas prácticas has producido 0 kgs de CO<sub>2</sub><br>(usando las opciones de transporte o energía en Buena Prácticas, no produces CO<sub>2)");
    }
       

    total = co2EnvasesTotal + co2Energia + co2Transporte + co2Practicas;

    (document.getElementById("demo").innerHTML= "Has consumido " + parseFloat(total).toFixed(3).replace('.', ',') + " kgs de CO<sub>2</sub>");
}