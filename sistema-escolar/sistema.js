class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    exibirPerfil() {
        return `Nome: ${this.nome}\nEmail: ${this.email}`;
    }
}

class Aluno extends Usuario {
    constructor(nome, email, senha, turma) {
        super(nome, email, senha);

        this.turma = turma;
    }
    exibirPerfil() {

        return `${super.exibirPerfil()}\nTurma: ${this.turma}`;
    }

}

class Professor extends Usuario {
    constructor(nome, email, senha, materias) {
        super(nome, email, senha);

        this.materias = materias

    }
    exibirPerfil() {
        return `${super.exibirPerfil()}\nMatérias: ${this.materias.join(", ")}`;
    }
}
const alunoteste = new Aluno("João", "joao@alpar.com", "123", "A");
const professorteste = new Professor("claudio", "claudio@alpar.com", "456", ["Matemática", "Física"]);
console.log(alunoteste.exibirPerfil());
console.log(professorteste.exibirPerfil())
