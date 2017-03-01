(function(){
'use strict';
angular.module('Mod1App',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
  $scope.lunch="pan, agua, pasta";
  $scope.msg="";
  $scope.cssColor="";
  $scope.checkLunch=function(){
    var arr=$scope.lunch.split(',');
    var _msg="";
    if($scope.lunch=="")
    {
      _msg= "Please enter data first!";
      $scope.cssColor="red";
    }
    else {
      if(arr.length<=3){
        _msg= "Enjoy!";
      }
      else {
          _msg= "Too much!";
      }
      $scope.cssColor="green";
    }
    $scope.msg=_msg;
    return $scope.msg;
  };
}

})();
