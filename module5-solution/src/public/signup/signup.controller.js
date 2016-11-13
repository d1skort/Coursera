(function() {
"use strict";

angular.module("public")
.controller("SignUpController", SignUpController);

SignUpController.$inject = ['MenuService', 'UserInfoService'];
function SignUpController(MenuService, UserInfoService) {
  var form = this;

  form.dish_status = 0;

  form.submit = function() {
    form.completed = true;
    MenuService.getItemByShortName(form.favorite_dish).then(function(response) {
      form.dish_status = response.status;
      if (response.status === 200) {
        UserInfoService.save({
          firstname: form.first_name,
          lastname: form.last_name,
          email: form.email,
          phone: form.phone,
          favorite_dish: response.data
        });
      }
    });
  }
}

})();
