/**
 *  created by glcsnz123
 *
 */
angular.module('education.switchCtrl', [])
  .controller('switchCtrl.characterCtrl', function ($scope, educationService) {

    $scope.characters = [
      {
        id: 1,
        name: "学生",
        desc: "您将作为学生角色切换到云私塾。",
        sref: "education.stcourse",
        imageUrl: "img/Education/zhishi.jpg",
        title: "自选课程",
      },
      {
        id: 2,
        name: "教师",
        desc: "您将作为教师角色切换到云私塾",
        sref: "education.temanager",
        imageUrl: "img/Education/body.jpg",
        title: "服务管理",
      },
      {
        id: 3,
        name: "私塾",
        desc: "您将作为私塾角色切换到云私塾",
        sref: "education.school",
        imageUrl: "img/Education/xingge.jpg",
        title: "云私塾",
      },
    ];
    educationService.setCharacterType(0);
    educationService.refreshRootMenu();
    $scope.clickAt = function (inx) {
      $scope.viewTitle = $scope.characters[inx - 1].title;
      educationService.setCharacterType(parseInt(inx));
      educationService.refreshRootMenu();
    }
  });



