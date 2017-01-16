angular.module('oblique', ['ionic'])

.controller('ObliqueCtrl', function($scope){
  // a list of all ideas
  $scope.ideas = [
    { text: 'Keep calm and flip!' },
    { text: 'Eat a banana!' },
    { text: 'Go and do some excercise!' },
    { text: 'Close your eyes!' }
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