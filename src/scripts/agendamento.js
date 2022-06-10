var barbeiroDiv = document.getElementById("barbeiros-info");
var barbeiroSeeds = new XMLHttpRequest();


barbeiroSeeds.open("GET", "../../seeds/barber.json");
barbeiroSeeds.onload = function () {
  var barbeirosJson = JSON.parse(barbeiroSeeds.responseText);
  renderHTML(barbeirosJson);
};
barbeiroSeeds.send();

function renderHTML(data) {
  var htmlString = "";
  for (let barbeiro of data) {
    htmlString +=
      '<div class="blocoBarbeiro">' +
      obtemHorarios(barbeiro.Horarios) +
      obtemImagen(barbeiro.Imagem, barbeiro.Nome) +
      obtemInfoServico(barbeiro.Servicos, barbeiro.Unidade) +
      "</div>";
  }
  barbeiroDiv.insertAdjacentHTML("beforeend", htmlString);
}

function obtemHorarios(horarios) {
  var stringHorarios =
    '<div class="info">' + '<p class="textoInfo">Horarios Disponíveis</p>';
  for (let horario of horarios) {
    stringHorarios +=
      '<button class="botaoAgendamento">' + horario + "</button>";
  }
  stringHorarios += "</div>";
  return stringHorarios;
}

function obtemImagen(url, nome) {
  return (
    '<div class="info" style="text-align: center">' +
    '<p class="textoInfo">' +
    nome +
    "</p>" +
    ("<img src=" + url + ' class="center">') +
    "</img>" +
    "</div>"
  );
}

function obtemInfoServico(servicos, unidade) {
  var stringInfoServico =
    '<div class="info">' +
    '<p class="textoInfo">Serviços Prestados</p>' +
    "<ul>";
  for (let servico of servicos) {
    stringInfoServico += "<li>" + servico + "</li>";
  }
  stringInfoServico +=
    "</ul>" +
    '<p>Local:</p>' +
    '<p>' +
    unidade +
    "</p>" +
    "</div>";
  return stringInfoServico;
}
