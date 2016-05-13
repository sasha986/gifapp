angular.module('gifapp.controllers', []).
    /* Main controller */
    controller('wallController', function ($scope, $ionicModal, giphyAPIservice) {
        $scope.gifs = [];

        $scope.showImage = function(image) {
            $scope.popupImage = image;
            $scope.showModal('templates/popup.html');
	    }

        $scope.showModal = function(templateUrl) {
            $ionicModal.fromTemplateUrl(templateUrl, {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });
        }
	    // Close the modal
        $scope.closeModal = function() {
            $scope.modal.hide();
            $scope.modal.remove()
        };

        $scope.loadMore = _.throttle(function() {
        	giphyAPIservice.getGifs('animals', 10, $scope.gifs.length).success(function (response) {
            	_.each(response.data, function(data) {
            		$scope.gifs.push(data);
                });

                console.log(response);
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        }, 3000);

        $scope.loadMore();
    });