(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = shirts;
  })

  var shirts = [
      { shirtName: 'Casual Friday',
          color: 'gray',
          size: 'M',
          price: '12'
      },
      { shirtName: 'Portal Based Cleaning',
          color: 'gray',
          size: 'M',
          price: '12'
      }

  ];

})();
