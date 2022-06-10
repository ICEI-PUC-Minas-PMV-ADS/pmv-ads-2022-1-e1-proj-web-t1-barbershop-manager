var barbeiroDiv = document.getElementById("barbeiros-info");
var inputHorario = document.getElementById("pesquisaHorario");
var inputBarbeiro = document.getElementById("pesquisaBarbeiro");
var agendamentosDisponiveis = new XMLHttpRequest();

agendamentosDisponiveis.open("GET", "../../seeds/barber.json");
agendamentosDisponiveis.onload = function () {
  var barbeirosJson = JSON.parse(agendamentosDisponiveis.responseText);
  renderHTML(barbeirosJson);
};
agendamentosDisponiveis.send();

inputHorario.addEventListener("input", handlePesquisa, false);
inputBarbeiro.addEventListener("input", handlePesquisa, false);

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
    "</ul>" + "<p>Local:</p>" + "<p>" + unidade + "</p>" + "</div>";
  return stringInfoServico;
}

function handlePesquisa() {
  var barbeirosJson = JSON.parse(agendamentosDisponiveis.responseText);
  if (barbeirosJson.length && barbeirosJson.length > 0) {
    if (inputBarbeiro.value.length && inputBarbeiro.value.length > 0) {
      barbeirosJson = barbeirosJson.filter(
        (barbeiro) =>
          normalizarTexto(barbeiro.Nome).indexOf(
            normalizarTexto(inputBarbeiro.value)
          ) !== -1
      );
    }
    if (inputHorario.value.length && inputHorario.value.length > 0) {
      barbeirosJson = barbeirosJson.filter((barbeiro) =>
        barbeiro.Horarios.some(horario => horario.includes(inputHorario.value))
      );
    }
  }
  barbeiroDiv.innerHTML = "";
  renderHTML(barbeirosJson);
  agendamentosDisponiveis.send();
}

function normalizarTexto(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
