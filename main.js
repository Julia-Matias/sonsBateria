const listaDeTeclas = document.querySelectorAll(".tecla");
let contador = 0;

function tocarSom(idAudio) {
  document.querySelector(idAudio).play();
}

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  tecla.onclick = () => {
    tocarSom(idAudio);
  };

  tecla.onkeydown = (event) => {
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.add("ativa");
    } else {
    }
  };

  tecla.onkeyup = (event) => {
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.remove("ativa");
    } else {
    }
  };
}
