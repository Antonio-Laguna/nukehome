import angular from 'angular';
import uiRouter from 'angular-ui-router';

import userCreateTemplate from './user-create.html';

const MODULE_NAME = 'nukehome.user';

const ngModule = angular.module(MODULE_NAME, [
  uiRouter
]);

ngModule.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('user', {
        url: '/user/',
        templateUrl: userCreateTemplate,
        controller: function() {
          console.log('Hi user');
        }
      });

  $urlRouterProvider.otherwise('/404/');
});

export default ngModule;
