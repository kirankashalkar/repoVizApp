/**
 * RepoViz App router
 */
define([
	'marionette', 
	'../controllers/RepoVizController'
], function(
	Marionette, 
	RepoVizController) {

    return Marionette.AppRouter.extend({
    	// names correspond to methods in RepoVizRouter's controller
        appRoutes: {
			"": "index",
            "repos": "repos"
        }
    });
});