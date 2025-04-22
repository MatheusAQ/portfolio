const usuarios = [
    new Aluno("Matheus", "Matheus.alpar@gmail.com", "abcd123", "B"),
    new Aluno("Pedro", "Pedro.alpar@gmail.com", "abcd1234", "A"),
    new Professor("Jorge", "Jorge.alpar@gmail.com", "abcd12345", "Português")
];


function login() {

    event.preventDefault();
    const emailJS = document.getElementById('email')
    const senhaJS = document.getElementById('senha')
    const testeJS = document.querySelector("p#teste")
    const email = emailJS.value;
    const senha = senhaJS.value;

    const UsuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

    if (UsuarioEncontrado) {
        testeJS.innerText = "Login Realizado com Sucesso"
        localStorage.setItem("usuarioLogado", JSON.stringify(UsuarioEncontrado));
        window.location.href = "paginainicial.html";

    } else {
        testeJS.innerText = "Email ou senha incorretos"
        testeJS.style.color = "red";
    }


}



