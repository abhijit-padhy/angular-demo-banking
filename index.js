var app = angular.module("app",['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/main.html",
        controller : "mainCtrl"
    })
    .when("/mainPage", {
        templateUrl : "./views/main.html",
        controller : "mainCtrl"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});


app.controller('indexCtrl',function($scope){
	$scope.data = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]];
	$scope.navAccess = function(){
		$("#navContainer").removeClass('navContainer');
		$("#navContainer").removeClass('slideOut');
		$("#navContainer").addClass('slideIn');
		$("#container").addClass("opac"); 
	}
	$scope.navCollapse = function(){
		if($('#navContainer').hasClass('slideIn')){
			$("#container").removeClass("opac");	
			$("#navContainer").removeClass('slideIn');
			$("#navContainer").addClass('slideOut');
		}
	}
});

app.controller('mainCtrl',function($scope){
	$scope.rows = "hello mesg";
    $scope.download = function(){
        var doc = new jsPDF();
        doc.text(20, 20, 'Hello world.');
        doc.save('Test.pdf');
    }
});

