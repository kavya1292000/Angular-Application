script>

var app = angular.module("myShoppingList", []);

app.controller("myCtrl", function($scope) {

$scope.products = ["Milk", "Bread", "Cheese"];

});</script>



<div ng-app="myShoppingList" ng-controller="myCtrl">

<ul>

<li ng-repeat="x in products">{{x}}</li>

</ul>

</div>
