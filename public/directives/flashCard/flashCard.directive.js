app.directive('flashCard', function() {
    return {
        restrict: 'E',
        scope: {
            theCard: '=card',
            fci: '='
        },
        link: function(scope, element, attrs) {
            //console.log(scope.fci);
        },
        templateUrl: '/directives/flashCard/flashCard.html'
    };
});