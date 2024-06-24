// Selecionar os elementos do DOM
const relogio = document.querySelector('.relogio');
const iniciarBtn = document.querySelector('.Iniciar');
const pausarBtn = document.querySelector('.Pausar');
const zerarBtn = document.querySelector('.Zerar');

let timer;
let segundos = 0;
let pausado = true;

function formatTime(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

function atualizarRelogio() {
  relogio.textContent = formatTime(segundos);
}

function iniciarTimer() {
  if (pausado) {
    pausado = false;
    relogio.classList.remove('pausado');
    relogio.classList.add('despausado');
    timer = setInterval(() => {
      segundos++;
      atualizarRelogio();
    }, 1000);
  }
}

function pausarTimer() {
  if (!pausado) {
    pausado = true;
    clearInterval(timer);
    relogio.classList.add('pausado');
    relogio.classList.remove('despausado');
  }
}

function zerarTimer() {
  pausarTimer();
  segundos = 0;
  atualizarRelogio();
}

iniciarBtn.addEventListener('click', iniciarTimer);
pausarBtn.addEventListener('click', pausarTimer);
zerarBtn.addEventListener('click', zerarTimer);

// Inicializar o display do relógio
atualizarRelogio();
