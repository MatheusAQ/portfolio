const app = angular.module('taskGerenciamento', [])

app.controller('AppController', function ($scope) {
    $scope.mensagem = "Bem vindo ao sistema de cadastro escolar"
})

app.controller('ListaController', function ($scope, UsuarioService) {
    $scope.filtroSelecionado = "";
    $scope.filtro = "";
    $scope.usuarios = UsuarioService.listar();
    $scope.novoUsuario = {};
    $scope.salvando = false;
    $scope.sucesso = "";


    $scope.salvarUsuario = function () {

        if ($scope.salvando) return;

        $scope.salvando = true;
        $scope.sucesso = "";

        UsuarioService.salvar($scope.novoUsuario).then(function () {
            $scope.usuarios = UsuarioService.listar();
            $scope.novoUsuario = {};
            $scope.sucesso = "Usuário salvo com sucesso!";
            $scope.salvando = false;
            $scope.$apply()


        });
    };

    $scope.removerUsuario = function (usuario) {
        UsuarioService.remover(usuario);
    };
});