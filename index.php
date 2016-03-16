<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
	    
	    <title>Winthrop Medical Practice Websites</title>

	    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
	    <link href="css/bootstrap.min.css" rel="stylesheet">
	    <link href="css/style.css" rel="stylesheet">
	</head>

	<body>

		<div class="navbar-static-top">
			<h1 class="text-center">Winthrop Medical Practice Websites</h1>
		</div>

        <!--[if lt IE 10]>
            <div class="alert alert-warning" role="alert">
                <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
            </div>

            <style>
                .navbar-static-top {
                    margin-top: 45px;
                }
                .container { display: none; }
            </style>
        <![endif]-->

        <!--[if IE 9]>
        <style>
            .ie-display { display: block; }
            ul > li { margin: 15px 0; }
        </style>

        <ul class="ie-display" data-ng-app="portfolioApp" data-ng-controller="portfolioAppCtrl">
            <li data-ng-repeat="site in sites"><a href="{{ site.url | trustAsResourceUrl }}">{{ site.title }}</a></li>
        </ul>
        <![endif]-->

        <!--[if lt IE 9]>
            <style>
                .ie-display-old { display: block; }
                ul > li {  margin: 15px 0; }
            </style>

            <ul class="ie-display-old">
				<li><a href="http://www.shorehammedicalservicespc.com/" target="_blank">Shoreham Medical Services</a></li>
                <li><a href="http://wuhwebsites.winthrop.org/bethpage_wordpress/" target="_blank">Bethpage Primary Medical Care</a></li>
                <li><a href="http://wuhwebsites.winthrop.org/gardencityprimary/" target="_blank">Garden City Primary Medical Care</a></li>
                <li><a href="http://wuhwebsites.winthrop.org/shoreheart_wordpress/" target="_blank">Shore Heart Associates</a></li>
                <li><a href="http://wuhwebsites.winthrop.org/southshorecardiovascular_wordpress/" target="_blank">South Shore Cardiovascular Medical</a></li>
                <li><a href="http://wuhwebsites.winthrop.org/advanced_neuro_wordpress/" target="_blank">Advanced Neurological Associates</a></li>
                <li><a href="http://wuhwebsites.winthrop.org/advanced_ortho_wordpress/" target="_blank">Advanced Orthopaedic Specialists</a></li>
                <li><a href="http://wuhwebsites.winthrop.org/cipolla_wordpress/" target="_blank">Anthony Cipolla Medical Services</a></li>
                <li><a href="http://wuhwebsites.winthrop.org/eastend_cardio_wordpress/" target="_blank">East End Cardiology</a></li>
                <li><a href="http://wuhwebsites.winthrop.org/kelt_wordpress" target="_blank">Peter Kelt Medical Services</a></li>
                <li><a href="http://wuhwebsites.winthrop.org/kaplan_wordpress" target="_blank">Mel Kaplan Medical Services</a></li>
                <li><a href="http://wuhwebsites.winthrop.org/anzalone_wordpress" target="_blank">Vincent Anzalone Medical Services</a></li>
                <li><a href="http://wuhwebsites.winthrop.org/pisciotto_wordpress" target="_blank">Pisciotto Medical Services</a></li>
                <li><a href="http://giali.net" target="_blank">Gastrointestinal Associates of Long Island</a></li>
            </ul>
        <![endif]-->


		<div data-ng-app="portfolioApp" data-ng-controller="portfolioAppCtrl" class="container">

			<div class="row">
				<div class="col-sm-12">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs" role="tablist">
						<li role="presentation" class="active"><a href="#list" aria-controls="list" role="tab" data-toggle="tab"><i class="fa fa-th-list"></i> List</a></li>
						<li role="presentation"><a href="#grid" aria-controls="grid" role="tab" data-toggle="tab"><i class="fa fa-th"></i> Grid</a></li>
					</ul>
				</div>
			</div>

				<!-- Tab panes -->
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane active" id="list">
						<div class="row">
							<div class="col-sm-12">
								<div class="table-responsive">
								<table class="table table-hover table-bordered">
									<thead>
									<tr>
										<th>#</th>
										<th>Medical Practice Name</th>
										<th>Status</th>
										<th>Reason For Status</th>
										<!--<th>Domain Name</th>-->
										<th>Reviewed by Marketing?</th>
										<th>Privacy Policy?</th>
										<th>Live?</th>
										<!--<th>WordPress Network?</th>-->

									</tr>
									</thead>
									<tbody data-ng-repeat="site in sites | orderBy: '-reviewed'">
									<tr data-toggle="tooltip" data-placement="bottom" title="{{ site.explain }}">
										<td>{{ $index + 1}}</td>
										<td><a ng-href="{{ site.url }}" target="_blank">{{ site.title }}</a></td>
										<td>{{ site.status }}</td>
										<td>{{ site.reason }}</td>
										<!--<td>{{ site.domain }}</td>-->
										<td>{{ site.reviewed }}</td>
										<td>{{ site.privacy }}</td>
										<td>{{ site.live }}</td>
										<!--<td>{{ site.wordpress }}</td>-->

									</tr>
									</tbody>
								</table>
								</div>
							</div>
						</div>
					</div>
					<div role="tabpanel" class="tab-pane" id="grid">
						<div class="row">
							<div class="col-lg-4 col-md-6 col-sm-6" data-ng-repeat="site in sites | orderBy: '-reviewed'">

								<div class="site">
									<div class="center-frame">
										<div class="overlay" data-ng-click="open(site)">
											<a href="#">View Website</a>
										</div>
										<img class="frame" data-ng-src="{{ site.image }}"/>
									</div>
								</div>
								<h3 class="text-center">{{ site.title }}</h3>
								<hr>

								<script type="text/ng-template" id="myModalContent.html">
									<div class="modal-header">
										<div class="row">
											<div class="col-xs-12">
												<h2 class="text-center">{{ site.title }}</h2>
												<span class="close" ng-click="close()"><i class="fa fa-times"></i></span>
											</div>
										</div>
									</div>
									<div class="modal-body">
										<div class="row">

											<div class="col-sm-9 push">
												<div class="modal-site">
													<iframe class="frame modal-frame" ng-src="{{ site.url | trustAsResourceUrl }}"></iframe>
												</div>
											</div>

											<div class="col-sm-3 pull">
												<div class="info">
													<div class="devices">
														<div ng-click="desktop()" class="btn-device border-bottom"><a class="desktop"><i class="fa fa-desktop"></i><span>Desktop</span></a></div>
														<div ng-click="tablet()" class="btn-device border-bottom"><a class="tablet"><i class="fa fa-tablet"></i><span>Tablet</span></a></div>
														<div ng-click="mobile()" class="btn-device"><a class="mobile"><i class="fa fa-mobile"></i><span>Mobile</span></a></div>
													</div>
													<div class="btn-visit border-left"><a ng-href="{{ site.url }}" target="_blank"><i class="fa fa-share"></i><span>Visit Site</span></a></div>
													<div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</script>

							</div>
						</div>
					</div>
				</div>

	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/angular-ui-bootstrap.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<!-- Tooltip -->
	<script>
		$(function () {
			$('[data-toggle="tooltip"]').tooltip();
		});
	</script>

  </body>

	

</html>
