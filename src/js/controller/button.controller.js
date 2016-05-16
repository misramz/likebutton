function ButtonController($scope){

  // $scope.addTask = function (times) {
  //   times ++ 1;
  // }
$scope.buttonStatus = 0;
$scope.likes = 'Likes';
$scope.click = function() {
  $scope.buttonStatus = $scope.buttonStatus + 1;
  if ($scope.buttonStatus === 1) {
    $scope.likes = 'Like';} else {
    $scope.likes = 'Likes';
    }




}





}


ButtonController.$inject = ['$scope'];

















export {ButtonController};
