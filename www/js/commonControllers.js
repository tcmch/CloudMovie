/**
 * Created by glcsnz123 on 2015/11/16.
 */

angular.module('starter.commonControllers', [
  'commonControllers.loginCtrl',
  'commonControllers.mainCtrl'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      // 登录页面
      .state('login', {
        url: '/login',
        templateUrl: 'templates/Login.tpl.html',
        controller: 'LoginCtrl'
      })
      // 首页
      .state('main', {
        url: '/main',
        templateUrl: 'templates/MainRoot.tpl.html',
        abstract: true
      })
      .state('main.service', {
        url: '/service',
        views: {
          'main-service': {
            templateUrl: 'templates/main.service.tpl.html',
            controller: 'MainCtrl'
          }
        }
      });
  });
