app.controller('MainCtrl', function($scope, FlashCardFactory, $rootScope) {
    // make a query
    FlashCardFactory.getFlashCards()
        .then(function(cards) {
            $rootScope.flashCards = cards;
        })
        .catch(function(e) {
            console.log('e', e);
        })

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.activeCat = null;

    $scope.filterByCategory = function(cat) {
        $scope.activeCat = cat;
        $rootScope.flashCards = null;
        FlashCardFactory.getFlashCards(cat)
            .then(function(cards) {
                $rootScope.flashCards = cards;
            });
    };

    $scope.$on('addedCard', function(e, card) {
        if ($scope.activeCat === card.category) {
            $rootScope.flashCards.push(card);
        }
    });
})