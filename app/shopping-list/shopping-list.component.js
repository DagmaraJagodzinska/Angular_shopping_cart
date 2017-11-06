(function(){
    'use strict';

    angular
    .module('shoppingList',['ui.bootstrap'])
    .component('shoppingList', {
        templateUrl:'shopping-list/shopping-list.template.html',
        controllerAs: "vm",
        controller: function ($http, $log,){
        var vm = this;

        vm.cart = {
            sum: 0,
            cartProducts: []
        };
        console.log(vm.cart);

       vm.add = function (item) {
            vm.cart.sum = vm.cart.sum + item.price;
            console.log('suma wszytskich cen '+ vm.cart.sum + 'cena pojedyncza jednego elementu dodanego ' + item.price);
            vm.cart.cartProducts.push(item);
            console.log('tyle elementow'+ vm.cart.cartProducts.length);
        };

        $http({
            method: 'GET',
            url : "shopping-list/shoplist.json",

        }).then(function successCallback(data) {
            vm.myData = data.data;

            vm.displayItems = vm.myData
            console.log(vm.myData);
  
        }, function errorCallback(response) {
            console.log('We don\'t have a data');
        });
     }
  });
})();