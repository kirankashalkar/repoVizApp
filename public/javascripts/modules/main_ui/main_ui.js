/**
 * Main controller sub-module
 */
define([
	'./models/RepoModel',
	'./models/RepoCollection',
	'./views/RepoCollectionView'
], function(
	RepoModel, 
	RepoCollection, 
	RepoCollectionView
) {
	RepoVizApp.module("MainUI", function(MainUI, RepoVizApp, Backbone, Marionette, $, _) {

		var vent = new Backbone.Wreqr.EventAggregator();

		var repoCollection = new RepoCollection();

		var repoCollectionView = new RepoCollectionView({
			collection: repoCollection,
			vent: vent
		});

		bindEvents();

		/**
		 *	On start, render the view
		 */
		MainUI.on('start', function() {
			console.log('Main_UI module started');

			repoCollection.fetch({
				success: function(data) {
					console.log('got it');
					vent.trigger('repos:fetch:success', data);
				},
				error: function(data) {
					console.log('did not get it');
				}
			});

		});

		function bindEvents() {
			vent.on("repos:fetch:success", function(repoCollection) {
				console.log('repos', repoCollection);
			});
		};


	});

	return RepoVizApp.MainUI;
});