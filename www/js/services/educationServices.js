/**
 * Created by glcsnz123 on 2016/1/12.
 * 云私塾服务
 */
angular.module('education.educationServices', [])

  /*配置原框架中EducationService的服务*/
  .service('educationService', function () {
    var characterType = 0;
    var refreshCallBack = null;
    return {
      getCharacterType: function () {
        return characterType;
      },
      setCharacterType: function (type) {
        characterType = type;
      },

      setRefreshCallback: function (callback) {
        refreshCallBack = callback;
      },
      refreshRootMenu: function () {
        refreshCallBack && refreshCallBack();
      },
    };
  });
