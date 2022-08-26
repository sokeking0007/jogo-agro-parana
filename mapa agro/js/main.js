var map = document.getElementsByClassName("map")[0]; // armazena o mapa
var tiles = document.querySelectorAll(".map__tiles img"); // armazena todos os tiles
var currentTile; // armazena o tile clicado

// cria os blocos do mapa.
for (let x=0; x<16; x++) {
    let block = document.createElement("div"); // cria um elemento (pode criar img também)
    block.classList.add("empty-block"); // adiciona uma classe
    map.appendChild(block); // adiciona o elemento filho no mapa
}

// remove a classe selected dos tiles
function removeSelected() {
    for (x of tiles) {
        x.classList.remove("selected");
    }
}

// adiciona um EventListener para cada elemento da lista
for (x of tiles) {
    x.addEventListener("click", function(obj) {
        removeSelected();
        obj.target.classList.add("selected"); // adiciona uma classe ao elemento clicado
        currentTile = obj.target;
        console.log(currentTile);
    }); 
}

// adiciona EventListeners para capturar cliques nos blocos (img) do mapa
for (x of map.children) {
    x.addEventListener("click", function(obj) {
        var elemento = obj.target; // armazena o elemento HTML clicado
        if (currentTile) { // verifica se algum tile foi selecionado
            // coloca a imagem de fundo no elemento clicado
            elemento.style.background = "url('"+ currentTile.src +"')";
            // elemento.src = currentTile.src; // atribui o src da imagem selecionada na clicada
            elemento.classList.remove("empty-block");
            elemento.classList.add("block");
        }
    });
}