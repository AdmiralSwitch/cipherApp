(function(){
  var app = angular.module('cipherApp', []);

  app.controller('addingController', ['$scope', function ($scope){
    $scope.add = function(a,b){
      return a + b;
    };
  }]);

  app.controller('translateController', ['$scope', function($scope){
    $scope.encrypt = function(message,key) {
      var originalText = message;
      var originalLetters = originalText.split("");
      var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      var encryptedText="", converter = "";
      for (x in originalLetters) {
        if (key > 0) {
          converter = alphabet[(alphabet.indexOf(originalLetters[x]) + key) % alphabet.length];
        } else {
          converter = alphabet[(alphabet.indexOf(originalLetters[x]) + (26 - key)) % alphabet.length];
        }
        encryptedText = encryptedText + converter;
      }
      return enctyptedText;
    };
  }]);

})();