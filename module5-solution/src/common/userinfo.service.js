(function () {

"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);

function UserInfoService() {
  var service = this;

  service.save = function(user) {
    service.user = user;
  };
}

})();
