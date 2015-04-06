<html>
	<head>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
	    
	    <title>Winthrop Medical Practice Websites</title>

	    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
	    <link href="css/bootstrap.min.css"rel="stylesheet">
	    <link href="css/style.css"rel="stylesheet">
	</head>

	<body>

		<div class="navbar-static-top">
			<h1 class="text-center">Winthrop Medical Practice Websites</h1>
		</div>

		<div ng-app="portfolioApp" ng-controller="portfolioAppCtrl" class="container">
			<div class="sites">
				<div class="row">

					<div class="col-lg-4 col-md-6 col-sm-6" ng-repeat="site in sites">

						<div class="site">
							<img class="loader" src="ajax-loader.gif" alt="loading"/>
							<div class="center-frame">
								<div class="overlay" ng-click="open(site)">
									<a href="#">View Website</a>
								</div>
								<iframe class="frame" ng-src="{{ site.url | trustAsResourceUrl }}" scrolling="no" align="middle"></iframe>
							</div>
						</div>
						<h3 class="text-center">{{ site.title }}</h3>
						<hr>

		                <script type="text/ng-template" id="myModalContent.html">
		                	<div class="modal-header">
			                	<div class="row">
			                    	<div class="col-xs-12">
			                			<h2 class="text-center">{{ site.title }}</h2>
			                		</div>
			                	</div>
		                	</div>
		                    <div class="modal-body">
		                    	<div class="row">
	                    			<div class="col-md-5">
	                    				<div class="modal-site">
	                    					<iframe class="frame modal-frame" ng-src="{{ site.url | trustAsResourceUrl }}" scrolling="no"></iframe>
	                    				</div>
	                    			</div>
	                    			<div class="col-md-7">
	                    				<div class="info">
	                    					<div class="devices">
	                    						<div class="btn-device"><a class="desktop"><i class="fa fa-desktop"></i><span>Desktop</span></a></div>
	                    						<div class="btn-device"><a class="tablet"><i class="fa fa-tablet"></i><span>Tablet</span></a></div>
	                    						<div class="btn-device"><a class="mobile"><i class="fa fa-mobile"></i><span>Mobile</span></a></div>
	                    					</div>
	                    					<p class="description">{{ site.description }}</p>
	                    					<button class="btn btn-success btn-site pull-left"><a ng-href="{{ site.url }}" target="_blank">Visit Website</a></button>
	                    				<div>
	                    			</div>
	                    		</div>
		                    </div>
		                    <div class="modal-footer">
		                    	<div class="row">
		                    		<div id="border" class="col-xs-12">
		                    			<button class="btn btn-primary" ng-click="close()">Close</button>
		                    		</div>
		                    	</div>
		                    </div>
		                </script>
					</div>
				</div>
			</div>
		</div>

  </body>

  	<!-- JQUERY LATEST -->
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/angular-ui-bootstrap.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript" src="js/scripts.js"></script>
</html>
