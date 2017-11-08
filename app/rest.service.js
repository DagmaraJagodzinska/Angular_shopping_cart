
(function () {
        'use strict';
        angular
            .module('ShoppingCart')
            .service('rest', function () {


            var products = [
                {name: "iPhone", price: 1200, "picture": "http://placehold.it/100x100", vol: 1},
                {name: "Samsung", price: 950, "picture": "http://placehold.it/100x100", vol: 1},
                {name: "Motorola", price: 800, "picture": "http://placehold.it/100x100", vol: 1},
                {name: "Huawei", price: 500, "picture": "http://placehold.it/100x100", vol: 1},
                {name: "LG", price: 450, "picture": "http://placehold.it/100x100", vol: 1},
                {name: "Stacjonarny telefon", "picture": "http://placehold.it/100x100", price: 20, vol: 1},
            ];
                
                function getProducts() {
                    return products;
                };
                
                return {
                    getProducts: getProducts,
                };
        })
    })();