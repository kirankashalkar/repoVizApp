/**
 * Repo API collection
 */

define(['./RepoCollection'], function(RepoCollection) {
	var RepoCollection = Backbone.Model.extend({
		// url: "https://api.github.com/orgs/:org/repos",
		url: "https://api.github.com/orgs/Netflix/repos",
		model: RepoCollection
	});

	return RepoCollection;
});