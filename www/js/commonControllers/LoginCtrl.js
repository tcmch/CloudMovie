/**
 * Created by glcsnz123 on 2015/11/16.
 */
angular.module('commonControllers.loginCtrl', [])

  .controller("LoginCtrl", function ($scope,$state) {

    $scope.loginData = {
      cellphone: "",
      password: ""
    };
    $scope.loginTapped = function () {
      $state.go('main.service');
    };
  });
