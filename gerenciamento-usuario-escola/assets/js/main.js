const app = angular.module('taskGerenciamento', [])

app.controller('AppController', function ($scope) {
    $scope.mensagem = "Bem vindo ao sistema de cadastro escolar"

    $scope.usuario = {
        nome: "João",
        tipo: "Aluno"
    }
    $scope.usuario = {
        nome: "Pedro",
        tipo: "Professor"
    }

})