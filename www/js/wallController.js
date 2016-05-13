angular.module('gifapp.controllers', []).
    /* Main controller */
    controller('wallController', function ($scope, giphyAPIservice) {
        $scope.gifs = [];

        $scope.loadMore = _.throttle(function() {
        	giphyAPIservice.getGifs('cute+animals', 10, $scope.gifs.length).success(function (response) {

            	_.each(response.data, function(data) {
            		$scope.gifs.push(data);
            	});

                console.log(response);
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        }, 3000);

        $scope.loadMore();
    });