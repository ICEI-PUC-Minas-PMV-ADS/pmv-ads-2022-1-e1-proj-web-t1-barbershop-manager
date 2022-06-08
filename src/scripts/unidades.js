var scrollTexto = document.getElementById('cartoes');
var scrollUnidades = document.getElementById('fotos-unidade');

function select_scroll_1(e) { scrollUnidades.scrollTop = scrollTexto.scrollTop; }
function select_scroll_2(e) { scrollTexto.scrollTop = scrollUnidades.scrollTop; }

scrollTexto.addEventListener('scroll', select_scroll_1, false);
scrollUnidades.addEventListener('scroll', select_scroll_2, false);