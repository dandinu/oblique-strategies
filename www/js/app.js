angular.module('oblique', ['ionic'])

.controller('ObliqueCtrl', function($scope){
  // a list of all ideas
  $scope.ideas = [
    { text: 'idea 1' },
    { text: 'idea 2' },
    { text: 'idea 3' },
    { text: 'idea 4' }
  ];

  // a random idea to show
  $scope.randomIdeas = $scope.ideas[Math.floor(Math.random() * $scope.ideas.length)];

  // reload UI
          $scope.reload = function() {
            $state.reload();
          };


})

.directive('flipContainer', function() {
  return {
    restrict: 'C',
    link: function($scope, $elem, $attrs) {
      $scope.flip = function() {
        $elem.toggleClass('flip');
      }
    }
  };
 });