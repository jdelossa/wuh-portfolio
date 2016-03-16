var portfolioApp = angular.module('portfolioApp', ['ui.bootstrap', 'filters-module']);

// Portfolio Controller
portfolioApp.controller('portfolioAppCtrl', function($scope, $timeout, $modal, $log) {

    // Sites
	$scope.sites = [
      {
          title: 'Shoreham Medical Services',
          url: 'http://www.shorehammedicalservicespc.com/',
          image: 'images/shoreham.png',
          status: 'Deployed',
          reason: 'Since 2014',
          domain: 'shorehammedicalservicespc.com',
          reviewed: 'Yes',
          live: 'Yes',
          wordpress: 'No',
          privacy: 'No'
      },
      {
          title: 'Bethpage Primary Medical Care', 
          url: 'http://wuhwebsites.winthrop.org/bethpage_wordpress/',
          image: 'images/bethpage.png',
          status: 'Pending',
          reason: 'Awaiting new physician headshots',
          domain: 'bethpageprimarymedicalcare.com',
          reviewed: 'Yes',
          live: 'No',
          wordpress: 'Yes',
          privacy: 'Yes',
          explain: 'Practice Manager Dorann Majewski wants new headshots for her physicians.'
      },
      {
          title: 'Garden City Primary Medical Care',
          url: 'http://wuhwebsites.winthrop.org/gardencityprimary/',
          image: 'images/garden-city-primary.png',
          status: 'Pending',
          reason: 'Being reviewed by Marketing',
          domain: 'gardencityprimarymedicalcare.com',
          reviewed: 'No',
          live: 'No',
          wordpress: 'Yes',
          privacy: 'Yes'
      },
      {
          title: 'Shore Heart Associates',
          url: 'http://wuhwebsites.winthrop.org/shoreheart_wordpress/',
          image: 'images/shore-heart.png',
          status: 'Pending',
          reason: 'Awaiting physician headshots',
          domain: '',
          reviewed: 'No',
          live: 'No',
          wordpress: 'Yes',
          privacy: 'No',
          explain: 'Physicians have not taken their headshots and will not go to DejaVu Studio.'
      },
      {
          title: 'South Shore Cardiovascular Medical',
          url: 'http://wuhwebsites.winthrop.org/southshorecardiovascular_wordpress/',
          image: 'images/south-shore.png',
          status: 'Complete',
          reason: 'Ready for deployment',
          domain: 'southshorecardiovascular.com',
          reviewed: 'Yes',
          live: 'No',
          wordpress: 'Yes',
          privacy: 'Yes'

      },
      {
          title: 'Advanced Neurological Associates',
          url: 'http://wuhwebsites.winthrop.org/advanced_neuro_wordpress/',
          image: 'images/advanced-neuro.png',
          status: 'Pending',
          reason: 'Awaiting physician headshots',
          domain: 'advancedneurologicalservices.com',
          reviewed: 'No',
          live: 'No',
          wordpress: 'Yes',
          privacy: 'Yes',
          explain: 'Physicians have not taken their headshots and will not go to DejaVu Studio.'
      },
      {
          title: 'Advanced Orthopaedic Specialists',
          url: 'http://wuhwebsites.winthrop.org/advanced_ortho_wordpress/',
          image: 'images/advanced-ortho.png',
          status: 'Pending',
          reason: 'Prompt to be reviewed by Marketing',
          domain: 'advancedorthospecialists.com',
          reviewed: 'No',
          live: 'No',
          wordpress: 'Yes',
          privacy: 'Yes'
      },
      {
          title: 'Anthony Cipolla Medical Services',
          url: 'http://wuhwebsites.winthrop.org/cipolla_wordpress/',
          image: 'images/cipolla.png',
          status: 'Pending',
          reason: 'Prompt to be reviewed by Marketing',
          domain: '',
          reviewed: 'No',
          live: 'No',
          wordpress: 'Yes',
          privacy: 'Yes'
      },
      {
          title: 'Peter Kelt Medical Services',
          url: 'http://wuhwebsites.winthrop.org/kelt_wordpress',
          image: 'images/kelt.png',
          status: 'Complete',
          reason: 'Ready for deployment',
          domain: '',
          reviewed: 'Yes',
          live: 'No',
          wordpress: 'Yes',
          privacy: 'Yes'
      },
      {
          title: 'Greenport Primary Medical Care',
          url: 'http://wuhwebsites.winthrop.org/kaplan_wordpress',
          image: 'images/greenport.png',
          status: 'Complete',
          reason: 'Ready for deployment',
          domain: '',
          reviewed: 'Yes',
          live: 'No',
          wordpress: 'Yes',
          privacy: 'Yes'
      },
      {
          title: 'Vincent Anzalone Medical Services',
          url: 'http://wuhwebsites.winthrop.org/anzalone_wordpress',
          image: 'images/anzalone.png',
          status: 'Pending',
          reason: 'Awaiting physician headshots',
          domain: 'drvincentanzalone.com',
          reviewed: 'No',
          live: 'No',
          wordpress: 'Yes',
          privacy: 'No',
          explain: 'Physicians have not taken their headshots and will not go to DejaVu Studio.'
      },
      {
          title: 'Pisciotto Medical Services',
          url: 'http://wuhwebsites.winthrop.org/pisciotto_wordpress',
          image: 'images/pisciotto.png',
          status: 'Pending',
          reason: 'Being reviewed by Marketing',
          domain: 'southshorecardiovascular.com',
          reviewed: 'No',
          live: 'No',
          wordpress: 'Yes',
          privacy: 'Yes'
      },
      {
          title: 'Gastrointestinal Associates of Long Island',
          url: 'http://giali.net',
          image: 'images/giali.png',
          status: 'Deployed',
          reason: 'Since 2015',
          domain: 'giali.net',
          reviewed: 'Yes',
          live: 'Yes',
          wordpress: 'No',
          privacy: 'Yes'
      },
      {
          title: 'East End Cardiology',
          url: 'http://wuhwebsites.winthrop.org/eastend_cardio_wordpress/',
          image: 'images/east-end-cardio.png',
          status: 'Discarded',
          reason: 'Practice already has a website',
          domain: '',
          reviewed: 'No',
          live: 'No',
          wordpress: 'Yes',
          privacy: 'No'
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
    } else if ($(window).width() <= 580 && $(window).width() > 400 ){
      $('.modal-site').css({'width': '346px'});
    } else if ($(window).width() <= 400 ){
      $('.modal-site').css({'width': '270px'});
    }

  }; 
  $scope.tablet = function() {
    $('.modal-frame').addClass('modal-tablet');
    $('.modal-frame').removeClass('modal-desktop');
    $('.modal-frame').removeClass('modal-mobile');

    if ($(window).width() > 400 ){
      $('.modal-site').css({'width':'280px'});
    } else if ($(window).width() <= 400 ){
      $('.modal-site').css({'width': '215px'});
    }

  }; 
  $scope.mobile = function() {
    $('.modal-frame').addClass('modal-mobile');
    $('.modal-frame').removeClass('modal-desktop');
    $('.modal-frame').removeClass('modal-tablet');
    $('.modal-site').css({'width':'168px'});

    if ($(window).width() > 400 ){
      $('.modal-site').css({'width':'168px'});
    } else if ($(window).width() <= 400 ){
      $('.modal-site').css({'width': '130px'});
    }
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
}]);
