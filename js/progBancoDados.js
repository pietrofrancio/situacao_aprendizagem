const form = document.getElementById('formCadastro');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const usuario = {
        nome: nome,
        email: email,
        idade: idade
    };
    let lista = JSON.parse(localStorage.getItem('usuarios')) || [];
    lista.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(lista));
    resultado.innerHTML = `
        <div class="card">
            <h3>Usuário cadastrado!</h3>
            <p><b>Nome:</b> ${nome}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Idade:</b> ${idade}</p>
        </div>`;
    form.reset();
    resultado.style.display = "block";
});


