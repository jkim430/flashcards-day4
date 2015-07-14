app.controller('StatsController', function ($scope, ScoreFactory) {
	console.log('running')
    $scope.scores = ScoreFactory;
  })