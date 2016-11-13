(function() {

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['UserInfoService', 'ApiPath'];
function UserInfoController(UserInfoService, ApiPath) {
  this.basePath = ApiPath;
  this.user = UserInfoService.user;
  this.registered = true;

  if (this.user === undefined) {
    this.registered = false;
  }
}

})();
