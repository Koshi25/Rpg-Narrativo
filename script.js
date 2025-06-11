function salvarFicha() {
  const ficha = {
    nome: document.getElementById('nome').value,
    classe: document.getElementById('classe').value,
    nivel: document.getElementById('nivel').value
  };
  localStorage.setItem('fichaRPG', JSON.stringify(ficha));
  alert('Ficha salva!');
}

function carregarFicha() {
  const ficha = JSON.parse(localStorage.getItem('fichaRPG'));
  if (ficha) {
    document.getElementById('nome').value = ficha.nome;
    document.getElementById('classe').value = ficha.classe;
    document.getElementById('nivel').value = ficha.nivel;
    alert('Ficha carregada!');
  } else {
    alert('Nenhuma ficha salva!');
  }
}

function rolarDado(faces) {
  const resultado = Math.floor(Math.random() * faces) + 1;
  document.getElementById('resultadoDado').innerText = `Resultado: ${resultado}`;
}
