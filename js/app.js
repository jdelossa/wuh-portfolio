var portfolioApp = angular.module('portfolioApp', ['ui.bootstrap', 'filters-module']);

// Portfolio Controller
portfolioApp.controller('portfolioAppCtrl', function($scope, $timeout, $modal, $log) {
  // Sites
	$scope.sites = [
      {
          title: 'Bethpage Primary Medical Care', 
          url: 'http://wuhwebsites.winthrop.org/bethpage_wordpress/',
          description: 'Bethpage Primary Medical Care',
      },
      {
          title: 'Garden City Primary Medical Care', 
          url: 'http://wuhwebsites.winthrop.org/garden_city_primary_wordpress/',
          description: 'Garden City Primary Medical Care',
      },
      {
          title: 'Shore Heart Associates', 
          url: 'http://wuhwebsites.winthrop.org/shoreheart_wordpress/',
          description: 'Shore Heart Associates',
      },
      {
          title: 'South Shore Cardiovascular Medical', 
          url: 'http://wuhwebsites.winthrop.org/southshorecardiovascular_wordpress/',
          description: 'South Shore Cardiovascular Medical',
      },
      {
          title: 'Advanced Neurological Associates', 
          url: 'http://wuhwebsites.winthrop.org/advanced_neuro_wordpress/',
          description: 'Advanced Neurological Associates',
      },
      {
          title: 'Advanced Orthopaedic Specialists', 
          url: 'http://wuhwebsites.winthrop.org/advanced_ortho_wordpress/',
          description: 'Advanced Orthopaedic Specialists',
      },
      {
          title: 'Anthony Cipolla Medical Services', 
          url: 'http://wuhwebsites.winthrop.org/cipolla_wordpress/',
          description: 'Anthony Cipolla Medical Services',
      },
      {
          title: 'East End Cardiology', 
          url: 'http://wuhwebsites.winthrop.org/eastend_cardio_wordpress/',
          description: 'East End Cardiology',
      },
       {
          title: 'Peter Kelt Medical Services', 
          url: 'http://wuhwebsites.winthrop.org/kelt_wordpress',
          description: 'Peter Kelt Medical Services',
      }
    ];

  // Modal Window
  $scope.open = function(_site) {
    var modalInstance = $modal.open({
    	controller: 'modalCtrl',
    	templateUrl: 'myModalContent.html',
    	size: 'lg',
        resolve: {
            site: function(){
              return _site;
            }
        }
    });
  };
   
});

// Modal Controller
portfolioApp.controller('modalCtrl', function($scope, $modalInstance, site) {
  $scope.site = site;

  $scope.desktop = function() {
    $('.modal-frame').addClass('modal-desktop');
    $('.modal-frame').removeClass('modal-tablet');
    $('.modal-frame').removeClass('modal-mobile');

    if ($(window).width() > 580 ){
      $('.modal-site').css({'width':'525px'});
    } else if ($(window).width() < 580 ){
      $('.modal-site').css({'width': '346px'});
    }

  }; 
  $scope.tablet = function() {
    $('.modal-frame').addClass('modal-tablet');
    $('.modal-frame').removeClass('modal-desktop');
    $('.modal-frame').removeClass('modal-mobile');
    $('.modal-site').css({'width':'280px'});
  }; 
  $scope.mobile = function() {
    $('.modal-frame').addClass('modal-mobile');
    $('.modal-frame').removeClass('modal-desktop');
    $('.modal-frame').removeClass('modal-tablet');
    $('.modal-site').css({'width':'168px'});
  }; 

  $scope.close = function () {
    $modalInstance.dismiss('close');
  };
});

// Site Url Filter
angular.module('filters-module', [])
.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])
