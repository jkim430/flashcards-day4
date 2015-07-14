var app = angular.module('FlashCardApp', ['ui.router']);

app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode({enabled: true, requireBase: true});
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('main', {
		url: '/',
		controller: 'MainCtrl',
		templateUrl: '/templates/main.html'
	})
	.state('statistics', {
		url: '/stats',
		controller: 'StatsController',
		templateUrl: '/templates/stats.html'
	})
	.state('flashCardForm', {
		url: '/form',
		controller: 'AddCard',
		templateUrl: '/templates/form.html'
	})
	.state('flashCardView', {
		url: '/view',
		controller: 'MainCtrl',
		templateUrl: '/templates/view.html'
	});
})
