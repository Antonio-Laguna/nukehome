import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';

import AppController from './app.controller';

import UserModule from './modules/user';

const MODULE_NAME = 'nukehome';

const ngModule = angular.module(MODULE_NAME, [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMessages,
  ngMaterial,
  UserModule.name
]);

ngModule.controller('AppController', AppController);

ngModule.config(function($interpolateProvider, $locationProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

angular.bootstrap(document, [MODULE_NAME]);
