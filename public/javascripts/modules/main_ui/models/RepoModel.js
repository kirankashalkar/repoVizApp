/**
 * Repo API model
 */

define([], function() {
	var RepoModel = Backbone.Model.extend({
		// url: "https://api.github.com/repos/:org_name",
		idAttribute: "name"
	});

	return RepoModel;
});