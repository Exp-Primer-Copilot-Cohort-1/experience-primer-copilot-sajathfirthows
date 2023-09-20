function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    scope: {
      member: '='
    },
    controller: function ($scope) {
      $scope.editing = false;
      $scope.edit = function () {
        $scope.editing = true;
      };
      $scope.save = function () {
        $scope.editing = false;
      };
    }
  };
}
