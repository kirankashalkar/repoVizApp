define([
	'marionette', 
	'../controllers/RepoVizController'
], function(
	Marionette, 
	RepoVizController) {

    return Marionette.AppRouter.extend({
    	//"index" must be a method in RepoVizRouter's controller
        appRoutes: {
			"": "index",
            "repos": "repos"
        }
    });
});