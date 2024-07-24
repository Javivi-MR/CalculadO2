


function calculaJSON(){
    fetch('./Scripts/database.json') //obtenemos el json
    .then(response => response.json())
    .then(data =>{ calulaDATA(data);}); //llamada a la funcion calulaDATA con los datos del json
}

function calulaDATA(database){
    var plastico = parseFloat(document.getElementById("plastico").value);
    var carton = parseFloat(document.getElementById("carton").value);
    var papel = parseFloat(document.getElementById("papel").value);
    var vidrio = parseFloat(document.getElementById("vidrio").value);
    var aluminio = parseFloat(document.getElementById("aluminio").value);
    var co2plastico = plastico * database.Envases.Plastico;
    var co2carton = carton * database.Envases.Carton;
    var co2papel = papel * database.Envases.Papel;
    var co2vidrio = vidrio * database.Envases.Vidrio;
    var co2aluminio = aluminio * database.Envases.Aluminio;

    var petroleo = parseFloat(document.getElementById("petroleo").value);
    var carbon = parseFloat(document.getElementById("carbon").value);
    var gasnatural = parseFloat(document.getElementById("gasnatural").value);
    var biomasanormal = parseFloat(document.getElementById("bionormal").value);
    var biomasacombustion = parseFloat(document.getElementById("biocombustion").value);
    var hidraulica = parseFloat(document.getElementById("hidraulica").value);
    var eolica = parseFloat(document.getElementById("eolica").value);
    var nuclear = parseFloat(document.getElementById("nuclear").value);
    var fotovoltaica = parseFloat(document.getElementById("fotovoltaica").value);
    var co2petroleo = petroleo * database.Energia.Petroleo;
    var co2carbon = carbon * database.Energia.Carbon;
    var co2gasnatural = gasnatural * database.Energia.GasNatural;
    var co2biomasanormal = biomasanormal * database.Energia.BiomasaNormal;
    var co2biomasacombustion = biomasacombustion * database.Energia.BiomasaCombustion;
    var co2hidrulica = hidraulica * database.Energia.Hidraulica;
    var co2eolica = eolica * database.Energia.Eolica;
    var co2nuclear = nuclear * database.Energia.Nuclear;
    var co2fotovoltaica = fotovoltaica * database.Energia.Fotovoltaica;

    var cgasolina = parseFloat(document.getElementById("cgasolina").value);
    var cdiesel = parseFloat(document.getElementById("cdiesel").value);
    var mgasolina = parseFloat(document.getElementById("mgasolina").value);
    var mdiesel = parseFloat(document.getElementById("mdiesel").value);
    var bus = parseFloat(document.getElementById("bus").value);
    var co2cgasolina = cgasolina * database.Transporte.KmGasolina;
    var co2cdiesel = cdiesel * database.Transporte.KmDiesel;
    var co2mgasolina = mgasolina * database.Transporte.KmGasolina;
    var co2mdiesel = mdiesel * database.Transporte.KmDiesel;
    var co2bus = bus * database.Transporte.KmDiesel;;

    var palsticorec = parseFloat(document.getElementById("palsticorec").value);
    var papelrec = parseFloat(document.getElementById("papelrec").value);
    var vidriorec = parseFloat(document.getElementById("vidriorec").value);
    var co2plasticorec = palsticorec * database.Practicas.Plastico;
    var co2papelrec = papelrec * database.Practicas.Papel;
    var co2vidriorec = vidriorec * database.Practicas.Vidrio;

    total = co2plastico + co2carton + co2papel + co2vidrio + co2aluminio + co2petroleo + co2carbon + co2gasnatural + co2biomasanormal + co2biomasacombustion + co2hidrulica + co2eolica + co2nuclear + co2fotovoltaica + co2cgasolina + co2cdiesel + co2mgasolina + co2mdiesel + co2bus + co2plasticorec + co2papelrec + co2vidriorec;
    document.getElementById("demo").innerHTML = "Has consumido " + total.toFixed(3) + " kilos de Co2";
}