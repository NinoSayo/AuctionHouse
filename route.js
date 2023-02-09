var app = angular.module("myApp",["ngRoute"])
app.config(function($routeProvider){
    $routeProvider
    .when("/",{templateUrl :"home.html"})
    .when("/shop",{templateUrl :"shop.html"})
    .when("/contact",{templateUrl:"Contact.html"})
    .when("/about",{templateUrl:"about.html"})
    .when("/signup",{templateUrl:"signup.html"})
    .when("/login",{templateUrl:"login.html"})
    .when("/cart",{templateUrl:"cart.html"})
});

