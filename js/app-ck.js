var portfolioApp=angular.module("portfolioApp",["ui.bootstrap","filters-module"]);portfolioApp.controller("modalCtrl",function(e,t,n){e.site=n;e.close=function(){t.dismiss("close")}});portfolioApp.controller("portfolioAppCtrl",function(e,t,n,r){e.sites=[{title:"Bethpage Primary Medical Care",url:"http://wuhwebsites.winthrop.org/bethpage_wordpress/",description:"Bethpage Primary Medical Care"},{title:"Garden City Primary Medical Care",url:"http://wuhwebsites.winthrop.org/garden_city_primary_wordpress/",description:"Garden City Primary Medical Care"},{title:"Shore Heart Associates",url:"http://wuhwebsites.winthrop.org/shoreheart_wordpress/",description:"Shore Heart Associates"},{title:"South Shore Cardiovascular Medical",url:"http://wuhwebsites.winthrop.org/southshorecardiovascular_wordpress/",description:"South Shore Cardiovascular Medical"},{title:"Advanced Neurological Associates",url:"http://wuhwebsites.winthrop.org/advanced_neuro_wordpress/",description:"Advanced Neurological Associates"},{title:"Advanced Orthopaedic Specialists",url:"http://wuhwebsites.winthrop.org/advanced_ortho_wordpress/",description:"Advanced Orthopaedic Specialists"},{title:"Anthony Cipiolla Medical Services",url:"http://wuhwebsites.winthrop.org/cipolla_wordpress/",description:"Anthony Cipiolla Medical Services"},{title:"East End Cardiology",url:"http://wuhwebsites.winthrop.org/eastend_cardio_wordpress/",description:"East End Cardiology"}];e.open=function(e){var t=n.open({controller:"modalCtrl",templateUrl:"myModalContent.html",size:"lg",resolve:{site:function(){return e}}})}});angular.module("filters-module",[]).filter("trustAsResourceUrl",["$sce",function(e){return function(t){return e.trustAsResourceUrl(t)}}]);