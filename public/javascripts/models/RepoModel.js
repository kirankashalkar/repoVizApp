/**
 * Repo API model
 */

define([
	'backbone'
], function(Backbone) {
	var RepoModel = Backbone.Model.extend({
		// url: "https://api.github.com/repos/:org_name",
		idAttribute: "name",

		defaults: {
			name: null,
			forks_count: 0,
			open_issues_count: 0,
			stargazers_count: 0,
			url: null
		}
	});

	return RepoModel;
});