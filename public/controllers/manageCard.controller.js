app.controller("ManageCardCtrl", function($scope, $rootScope, $stateParams, $state) {
    console.log('in manage card ctrl');
    //if card does not exist, make a GET request to get it
    $scope.cats = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];
    $scope.currentCard = $rootScope.flashCards[$stateParams.id];
    $scope.otherCats = $scope.cats.slice()
    $scope.otherCats.splice($scope.cats.indexOf($scope.currentCard.category), 1);


    $scope.editCard = function() {
        console.log('navigating to edit card...');
        $state.go('manageCard.editCard');
    }

});