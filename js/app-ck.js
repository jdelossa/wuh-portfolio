var portfolioApp=angular.module("portfolioApp",["ui.bootstrap","filters-module"]);portfolioApp.controller("portfolioAppCtrl",function(e,t,n,r){e.sites=[{title:"Bethpage Primary Medical Care",url:"http://wuhwebsites.winthrop.org/bethpage_wordpress/",image:"images/bethpage.png"},{title:"Garden City Primary Medical Care",url:"http://wuhwebsites.winthrop.org/garden_city_primary_wordpress/",image:"images/garden-city-primary.png"},{title:"Shore Heart Associates",url:"http://wuhwebsites.winthrop.org/shoreheart_wordpress/",image:"images/shore-heart.png"},{title:"South Shore Cardiovascular Medical",url:"http://wuhwebsites.winthrop.org/southshorecardiovascular_wordpress/",image:"images/south-shore.png"},{title:"Advanced Neurological Associates",url:"http://wuhwebsites.winthrop.org/advanced_neuro_wordpress/",image:"images/advanced-neuro.png"},{title:"Advanced Orthopaedic Specialists",url:"http://wuhwebsites.winthrop.org/advanced_ortho_wordpress/",image:"images/advanced-ortho.png"},{title:"Anthony Cipolla Medical Services",url:"http://wuhwebsites.winthrop.org/cipolla_wordpress/",image:"images/cipolla.png"},{title:"East End Cardiology",url:"http://wuhwebsites.winthrop.org/eastend_cardio_wordpress/",image:"images/east-end-cardio.png"},{title:"Peter Kelt Medical Services",url:"http://wuhwebsites.winthrop.org/kelt_wordpress",image:"images/kelt.png"},{title:"Mel Kaplan Medical Services",url:"http://wuhwebsites.winthrop.org/kaplan_wordpress",image:"images/kaplan.png"},{title:"Garden City Oncology Services",url:"http://wuhwebsites.winthrop.org/garden_city_oncology_wordpress",image:"images/garden-city-oncology.png"},{title:"Vincent Anzalone Medical Services",url:"http://wuhwebsites.winthrop.org/anzalone_wordpress",image:"images/anzalone.png"},{title:"Pisciotto Medical Services",url:"http://wuhwebsites.winthrop.org/pisciotto_wordpress",image:"images/pisciotto.png"}];e.open=function(e){var t=n.open({controller:"modalCtrl",templateUrl:"myModalContent.html",size:"lg",resolve:{site:function(){return e}}})}});portfolioApp.controller("modalCtrl",function(e,t,n){e.site=n;e.desktop=function(){$(".modal-frame").addClass("modal-desktop");$(".modal-frame").removeClass("modal-tablet");$(".modal-frame").removeClass("modal-mobile");$(window).width()>580?$(".modal-site").css({width:"525px"}):$(window).width()<=580&&$(window).width()>400?$(".modal-site").css({width:"346px"}):$(window).width()<=400&&$(".modal-site").css({width:"270px"})};e.tablet=function(){$(".modal-frame").addClass("modal-tablet");$(".modal-frame").removeClass("modal-desktop");$(".modal-frame").removeClass("modal-mobile");$(window).width()>400?$(".modal-site").css({width:"280px"}):$(window).width()<=400&&$(".modal-site").css({width:"215px"})};e.mobile=function(){$(".modal-frame").addClass("modal-mobile");$(".modal-frame").removeClass("modal-desktop");$(".modal-frame").removeClass("modal-tablet");$(".modal-site").css({width:"168px"});$(window).width()>400?$(".modal-site").css({width:"168px"}):$(window).width()<=400&&$(".modal-site").css({width:"130px"})};e.close=function(){t.dismiss("close")}});angular.module("filters-module",[]).filter("trustAsResourceUrl",["$sce",function(e){return function(t){return e.trustAsResourceUrl(t)}}]);