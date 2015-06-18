(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = shirts;
  })

  var shirts = [
      { shirtName: 'Casual Friday',
          color: 'gray',
          size: 'XL',
          price: '$120',
          owner: 'Steven'
      },
      { shirtName: 'I have your back',
          color: 'orange',
          size: 'L',
          price: '$10',
          owner: 'Steven'
      },
      { shirtName: 'Brother',
          color: 'yellow',
          size: 'L',
          price: '$50',
          owner: 'Andrew'
      },
      { shirtName: 'Save Tyrion',
          color: 'black',
          size: 'L',
          price: '$50',
          owner: 'Lucy'
      }

  ];

})();
