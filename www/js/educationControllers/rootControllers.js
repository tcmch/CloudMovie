/**
 * Created by glcsnz123 on 2016/1/12.
 */
angular.module('education.rootCtrl', [])
  .controller('rootCtrl.rootMenuCtrl', function ($scope, educationService) {

    $scope.viewTitle = "";
    var refreshCallback = function () {
      $scope.characterType = educationService.getCharacterType();
    };
    educationService.setRefreshCallback(refreshCallback);
    refreshCallback();
  });