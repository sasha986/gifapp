angular.module('gifapp.controllers', []).
    /* Main controller */
    controller('wallController', function ($scope, giphyAPIservice) {
        $scope.gifs = [];

        // request gifs
        var refresh = function() {
            giphyAPIservice.getGifs('cute+animals', 25, 0).success(function (response) {
                $scope.gifs = response.data;

                console.log(response);
            });
        };
        refresh();
    });