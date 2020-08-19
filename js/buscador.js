document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

var bars_search = document.getElementById("ctn-bars-search");
var cover_ctn_search = document.getElementById("cover-ctn-search");
var inputSearch = document.getElementById("input-search");
var box_search = document.getElementById("box-search");

function mostrar_buscador() {
  bars_search.style.top = "105px";
  cover_ctn_search.style.display = "block";
  inputSearch.focus();

  if (inputSearch.value === "") {
    box_search.style.display = "none";
  }
}

function ocultar_buscador() {
  bars_search.style.top = "-10px";
  cover_ctn_search.style.display = "none";
  inputSearch.value = "";
  box_search.style.display = "none";
}

document
  .getElementById("input-search")
  .addEventListener("keyup", buscador_interno);

function buscador_interno() {
  let filter = inputSearch.value.toUpperCase();
  let li = box_search.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let textValue = a.textContent || a.innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      box_search.style.display = "block";

      if (inputSearch.value === "") {
        box_search.style.display = "none";
      }
    } else {
      li[i].style.display = "none";
    }
  }
}
