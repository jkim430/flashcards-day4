var app = angular.module('FlashCardApp', ['ui.router']);

app.config(function($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

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
        })
        .state('manageCard', {
            url: '/manage/:id',
            controller: 'ManageCardCtrl',
            templateUrl: '/templates/manageCard.html'
        })
        .state('manageCard.editCard', {
            url: '/edit',
            templateUrl: '/templates/editCard.html'
        })
        .state('manageCard.deleteCard', {
            url: '/delete',
            templateUrl: '/templates/deleteCard.html'
        });
})