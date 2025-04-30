app.factory('UsuarioService', function () {
    const usuarios = [
        {
            nome: "João Silva",
            tipo: "Professor",
            dataCadastro: new Date(),

        },
        {
            nome: "Pedro Santos",
            tipo: "Aluno",
            dataCadastro: new Date(),
        },
        {
            nome: "Lucas Bento",
            tipo: "Professor",
            dataCadastro: new Date(),
        },
        {
            nome: "Guilherme Costa",
            tipo: "Aluno",
            dataCadastro: new Date(),
        },
        {
            nome: "Matheus Albuquerque",
            tipo: "Professor",
            dataCadastro: new Date(),
        },
        {
            nome: "Jorge Passos",
            tipo: "Aluno",
            dataCadastro: new Date(),
        },



    ];
    return {
        listar: function () {
            return usuarios;
        },

        salvar: function (usuario) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    usuario.dataCadastro = new Date();
                    usuarios.push(usuario);
                    resolve();
                }, 2000);
            });
        },
        remover: function (usuario) {
            const index = usuarios.indexOf(usuario);
            if (index !== -1) {
                usuarios.splice(index, 1);
            }
        }

    };
});