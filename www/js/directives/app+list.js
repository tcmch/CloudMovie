/**
 * Created by glcsnz123 on 2016/1/8.
 */

var myModule = angular.module('starter');

myModule.directive('cedthumblist', function () {
  return {
    restrict: 'ECMA',
    scope: {
      phones: "=",
      columnClickAt: '&'
    },
    templateUrl: 'templates/directiveTpl/thumb.brief.list.tpl.html',
  }
})
  .directive('cedthumbdetaillist', function () {
    return {
      restrict: 'ECMA',
      scope: {
        phones: "=",
        icons: "=",
        columnClickAt: '&'
      },
      templateUrl: 'templates/directiveTpl/thumb.detail.list.tpl.html',
    };
  });
