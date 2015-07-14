app.controller("ManageCardCtrl", function($scope, $rootScope, $stateParams, $state, $http) {
    //if card does not exist, make a GET request to get it
    if (!$rootScope.flashCards) {
        $state.go('main');
    }
    $scope.cats = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];
    $scope.currentCard = $rootScope.flashCards[$stateParams.id];
    $scope.originalQuestion = $scope.currentCard.question;
    $scope.otherCats = $scope.cats.slice()
    $scope.otherCats.splice($scope.cats.indexOf($scope.currentCard.category), 1);


    $scope.editCard = function() {
        $state.go('manageCard.editCard');
    }

    $scope.setCorrect = function(givenAnswer) {
        $scope.currentCard.answers.forEach(function(a) {
            a.correct = false;
        });
        givenAnswer.correct = true;
    };

    $scope.editFlashCard = function() {
        $http.put('/edit', {
            question: $scope.originalQuestion,
            editedCard: $scope.currentCard
        })
            .then(function() {
                $state.go('main');
            })
            .then(null, function(err) {
                throw err;
            });

    }

    $scope.deleteCard = function() {
        $state.go('manageCard.deleteCard');
    }

    $scope.deleteConfirm = function() {
        $http.delete('/delete' + '/' + $scope.originalQuestion)
            .then(function() {
                $rootScope.flashCards.splice($stateParams.id, 1);
                $state.go('main');
            })
            .then(null, function(err) {
                throw err;
            });

    }

});