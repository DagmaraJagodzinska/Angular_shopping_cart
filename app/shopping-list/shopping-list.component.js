(function(){
    'use strict';

    angular
    .module('shoppingList',['ui.bootstrap'])
    .component('shoppingList', {
        templateUrl:'shopping-list/shopping-list.template.html',
        controllerAs: "vm",
        controller: function (rest, data){
        var vm = this;

        this.products = rest.getProducts();

        vm.add = function (item) {
            var cart = data.getCart ()

            var a = cart.cartProducts.indexOf(item);
            if (a >= 0 ){ cart.cartProducts[a].vol++ }
            else {cart.cartProducts.push(item)}
            
            cart.sum = cart.sum + item.price;
            data.setCart(cart)
        };
     }
  });
})();