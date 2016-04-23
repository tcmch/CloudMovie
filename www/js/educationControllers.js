/**
 * Created by glcsnz123 on 2015/12/29.
 */
angular.module('education.educationControllers', ['education.teacherCtrl', 'education.rootCtrl', 'education.educationServices', 'education.switchCtrl']
)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      //云私塾
      .state('education', {
        url: '/education',
        abstract: true,
        templateUrl: 'templates/educationTpl/educationRoot.tpl.html',
        controller: 'rootCtrl.rootMenuCtrl',
      })

      //私塾
      .state('education.school', {
        url: '/school',
        views: {
          'menuContent': {
            templateUrl: 'templates/educationTpl/school.tpl.html',
          }
        }
      })
      .state('education.charchoose', {
        url: '/charchoose',
        views: {
          'menuContent': {
            templateUrl: 'templates/educationTpl/character.choose.tpl.html',
            controller: 'switchCtrl.characterCtrl',
          }
        }
      })

      //学生 自选课程
      .state('education.stcourse', {
        url: '/stcourse',
        views: {
          'menuContent': {
            templateUrl: 'templates/educationTpl/st.course.tpl.html'
          }
        }
      })

      //学生 更多操作
      .state('education.stoperation', {
        url: '/stoperation',
        views: {
          'menuContent': {
            templateUrl: 'templates/educationTpl/st.operation.tpl.html'
          }
        }
      })


      //教师 订单管理
      .state('education.tedata', {
        url: '/tedata',
        templateUrl: 'templates/educationTpl/te.data.tpl.html'
      })

      //教师 服务管理
      .state('education.temanager', {
        url: '/temanager',
        views: {
          'menuContent': {
            templateUrl: 'templates/educationTpl/te.manager.tpl.html',
          }
        }
      })

      //教师 师生互动
      .state('education.tecommun', {
        url: '/tecommun',
        views: {
          'menuContent': {
            templateUrl: 'templates/educationTpl/te.commun.tpl.html',
            controller: 'teacherCtrl.communCtrl'
          }
        }
      });
  });
