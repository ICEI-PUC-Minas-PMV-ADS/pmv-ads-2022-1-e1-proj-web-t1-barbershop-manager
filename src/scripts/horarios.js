var meusHorarios = window.localStorage.getItem("Horarios");
var sectionTela = document.getElementById("")
var seedBarbeiros = XMLHttpRequest()

seedBarbeiros.open("GET", "../../seeds/barber.json");

if (meusHorarios && meusHorarios.length && meusHorarios.length > 0){
    document.getElementById("dadosInexistentes").classList.remove("hidden")
}
