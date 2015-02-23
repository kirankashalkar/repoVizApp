/**
 * Repos collection
 */

define([
	'backbone', 
	'../models/RepoModel'
], function (
	Backbone,
	RepoModel) {
	var RepoCollection = Backbone.Collection.extend({
		url: function() {
			return 'https://api.github.com/orgs/' + this.repoName + '/repos'
		},

		model: RepoModel,
		comparator: function(a, b) {
			if (a.get('stargazers_count') > b.get('stargazers_count')) {
				return -1;
			} else {
				return 1;
			}
		},

		initialize: function(options) {
			_.extend(this, options);
		}

	});

	return RepoCollection;
});