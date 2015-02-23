/**
 * Commit model
 */

define([
	'backbone'
], function(Backbone) {
	var CommitModel = Backbone.Model.extend({
		// url: "https://api.github.com/repos/:owner/:repo/commits/:sha

		idAttribute: "sha",

		defaults: {
			sha: null,
			commit: {},
			comments_url: ""
		}
	});

	return CommitModel;
});