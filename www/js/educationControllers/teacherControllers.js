/**
 * Created by glcsnz123 on 2016/1/8.
 */
angular.module('education.teacherCtrl', [])
  .controller('teacherCtrl.communCtrl', function ($scope, $ionicActionSheet, educationService) {
    $scope.phones = [
      {
        imageUrl: "img/Education/customer1.jpg",
        id: "123",
        name: "卞景浩",
        snippet: "服务：晨鸟移动平台"
      },
      {
        imageUrl: "img/Education/customer2.jpg",
        id: "123",
        name: "陈昊",
        snippet: "服务：信息化思维课件"
      },
      {
        imageUrl: "img/Education/customer3.jpg",
        id: "123",
        name: "张宓",
        snippet: "服务：晨鸟移动平台"
      },
      {
        imageUrl: "img/Education/customer4.jpg",
        id: "123",
        name: "周为伟",
        snippet: "服务：晨鸟电子商务沙盘体验系统"
      },
    ];
    $scope.columnClick = function (inx) {
      var hideSheet = $ionicActionSheet.show({
        buttons: [{
          text: '对话'
        }, {
          text: '视频'
        }],
        destructiveText: '取消',
        titleText: '选择操作',
        buttonClicked: function (index) {
          return true;
        }
      });
    };
    //$scope.$apply();
  });

