var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/home.html",
        controller : "homeLoanCtrl"
    })
    .when("/homeLoan",{
        templateUrl : "./views/homeLoan.html",
    })
    .when("/eduLoan",{
        templateUrl : "./views/homeLoan.html"
    })
    .when("/personalLoan",{
        templateUrl : "./views/homeLoan.html"
    })
    .otherwise({
        redirecTo : "/"
    });
});

app.controller('indexCtrl',function($scope){
    $scope.message = "index message";
});

app.controller('homeLoanCtrl',function($scope,$http){
    $scope.loans = [];
    //Factory call
     $http.get("./data/data.json")
    .then(function(response) {
        $scope.loans = response.data.data;
        console.log($scope.loans);
    });
    // $scope.add = function(demo){
    //     console.log("controller");
    //     $scope.msgFlag = true;
    // }
});