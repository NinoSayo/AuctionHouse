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
    .when("/product1",{templateUrl:"product1.html"})
    .when("/product2",{templateUrl:"product2.html"})
    .when("/product3",{templateUrl:"product3.html"})
    .when("/product4",{templateUrl:"product4.html"})
    .when("/product5",{templateUrl:"product5.html"})
    .when("/product6",{templateUrl:"product6.html"})
    .when("/product7",{templateUrl:"product7.html"})
    .when("/product8",{templateUrl:"product8.html"})
    .when("/product9",{templateUrl:"product9.html"})
    .when("/product10",{templateUrl:"product10.html"})
});

