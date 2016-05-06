var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
	$scope.showPlayButton = true;
	$scope.showLaunchButton = false;

	$scope.startGame = function() {
		$scope.restartGame();
		$scope.showLaunchButton = true;
		$scope.showPlayButton = false;
	}

	$scope.restartGame = function() {
		var dataToGet = 'data/emptygamedata.json';
		$http.get(dataToGet).success(function(dataReceived) {
			$scope.gameData = dataReceived;
		});
	}

	$scope.getGameDataFromServer = function(frameNumber) {
		if(frameNumber > 5) {
			$scope.showPlayButton = true;
			$scope.showLaunchButton = false;
		}
		else {
			var dataToGet = 'data/gamedataframe' + frameNumber + '.json';
			$http.get(dataToGet).success(function(dataReceived) {
				$scope.gameData = dataReceived;
			});
		}
	}
}]);
