<html>
	<head>
		<meta charset="utf-8">
	    <title>Winthrop Medical Practice Websites</title>
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
	    <!-- Bootstrap Stylesheet -->
	    <link href="css/bootstrap.min.css"rel="stylesheet">
	    <!-- Style -->
	    <link href="css/style.css"rel="stylesheet">
	</head>

	
	<body>
		<!-- ng site app -->
		<div ng-app="portfolioApp" ng-controller="portfolioAppCtrl" class="container-fluid" >
			<!-- row -->
			<div class="row">
				<div class="col-xs-12">
					<h1 class="text-center">Winthrop Medical Practice Websites</h1>
				</div>
			</div>
			<!-- end row -->

			<!-- sites -->
			<div class="sites">
				<div class="row">
					<!-- repeat for each site -->
					<div class="col-md-4" ng-repeat="site in sites">
						<!-- site -->
						<div class="site">
							<div class="overlay" ng-click="open(site)">
								<a href="#">View Website</a>
							</div>
							<iframe class="frame" ng-src="{{ site.url | trustAsResourceUrl }}" scrolling="no"></iframe>
						</div>
						<!-- end site -->

						<!-- modal -->
		                <script type="text/ng-template" id="myModalContent.html">
		                	<!-- modal header -->
		                    <div class="modal-header">
		                        <h3>{{ site.title }}</h3>
		                    </div>
		                    <!-- modal body -->
		                    <div class="modal-body">
		                    	<div class="row">
	                    			<div class="col-sm-6">
	                    				<div class="modal-site">
	                    					<iframe class="frame" ng-src="{{ site.url | trustAsResourceUrl }}" scrolling="no"></iframe>
	                    				</div>
	                    			</div>
	                    			<div class="col-sm-6">
	                    				<div class="info">
	                    					<div class="devices">
	                    						<div class="mobile">place holder</div>
	                    						<div class="tablet">place holder</div>
	                    						<div class="desktop">place holder</div>
	                    					</div>
	                    					<p>{{ site.description }}</p>
	                    				<div>
	                    			</div>
	                    		</div>
		                    </div>
		                    <!-- modal footer -->
		                    <div class="modal-footer">
		                    	<div class="row">
		                    		<div class="col-xs-12">
		                    			<button class="btn btn-primary" ng-click="close()">Close</button>
		                    		</div>
		                    	</div>
		                    </div>
		                </script>
						<!-- end modal -->
					</div>
				</div>
				<!-- end row -->
			</div>
			<!-- end sites-->
		</div>
		<!-- end app -->

  </body>


  	<!-- JQUERY LATEST -->
	<script type="text/javascript" src="js/jquery.js"></script>
	<!-- AngularJS -->
	<script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/angular-ui-bootstrap.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
</html>
