angular.module('gifapp.controllers', []).
    /* Main controller */
    controller('wallController', function ($scope, $ionicModal, giphyAPIservice) {
        $scope.gifs = [];

        $ionicModal.fromTemplateUrl('templates/gifModal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });

        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });

        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });
        // request gifs
        var refresh = function() {
            giphyAPIservice.getGifs('cute+animals', 25, 0).success(function (response) {
                $scope.gifs = response.data;
                console.log(response);
            });
        };
        refresh();
    });