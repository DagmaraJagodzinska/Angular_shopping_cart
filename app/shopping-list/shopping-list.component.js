(function(){
    'use strict';

    angular
    .module('shoppingList',['ui.bootstrap'])
    .component('shoppingList', {
        templateUrl:'shopping-list/shopping-list.template.html',
        controllerAs: "vm",
        controller: function ($http, $log){
        var vm = this;

        $http({
            method: 'GET',
            url : "shopping-list/shoplist.json",

        }).then(function successCallback(data) {
            vm.myData = data.data;
            console.log(vm.myData);
  
        }, function errorCallback(response) {
            console.log('We don\'t have a data');
        });
     }
  });
})();