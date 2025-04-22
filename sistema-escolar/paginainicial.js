const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

const mensagem = `Seja Bem-vindo(a), ${usuarioLogado.nome}!`;
document.getElementById("boasVindas").innerText = mensagem;

let dados = `Nome: ${usuarioLogado.nome} \nEmail: ${usuarioLogado.email}`;

if (usuarioLogado.turma) {
    dados += `\nTurma: ${usuarioLogado.turma}`;
}

if (usuarioLogado.materias) {
    dados += `\nMatérias: ${usuarioLogado.materias}`;
}

document.getElementById("dados").innerText = dados;