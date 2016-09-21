var app = angular.module('friendsList', [])
app.controller('mainCtrl', ['$scope', function($scope) {
  $scope.myName = "Agata";
  $scope.nums = []
  
  //for(var i = 0; i < 100; i++) {
    //$scope.nums.push(i);
  //}

  $scope.myFriends = ['I have no friends', 'Casper'];
  $scope.addFriend = function(name) {
    $scope.myFriends.push(name);
  }
}]);
