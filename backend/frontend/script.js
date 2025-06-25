const API_URL = 'http://localhost:3000/api/pets';

async function carregarPets() {
  const res = await fetch(API_URL);
  const pets = await res.json();
  const lista = document.getElementById('lista-pets');
  lista.innerHTML = '';

  pets.forEach(pet => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${pet.nome}</strong> (${pet.tipo}, ${pet.idade} ano(s))
      <button onclick="removerPet(${pet.id})">Excluir</button>
    `;
    lista.appendChild(li);
  });
}

async function adicionarPet() {
  const nome = document.getElementById('nome').value.trim();
  const tipo = document.getElementById('tipo').value.trim();
  const idade = parseInt(document.getElementById('idade').value);

  if (!nome || !tipo || isNaN(idade)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, tipo, idade })
  });

  document.getElementById('nome').value = '';
  document.getElementById('tipo').value = '';
  document.getElementById('idade').value = '';

  carregarPets();
}

async function removerPet(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  carregarPets();
}

carregarPets();
