const app = angular.module('taskGerenciamento', [])

app.controller('AppController', function ($scope) {
    $scope.mensagem = "Bem vindo ao sistema de cadastro escolar"
})

app.controller('ListaController', function ($scope) {
    $scope.filtroSelecionado = "";

    $scope.usuarios = [
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

    ]


})
