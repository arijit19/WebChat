myApp.controller('homeController', ['$scope', function($scope)
{
  $scope.myInterval = 1000
  $scope.noWrapSlides = false
  $scope.active = 0
  var slides = $scope.slides = []
  var currIndex = 0

  $scope.addSlide = function()
  {
    slides.push
    (
      {
        image: '/static/img/img_'+currIndex+'.png',
        id: currIndex++
      }
    )
  }

  for (var i = 0; i < 3; i++)
  {
    $scope.addSlide()
  }
}])
