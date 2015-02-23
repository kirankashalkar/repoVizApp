/**
 * Commit API model
 */

define([
	'backbone'
], function(Backbone) {
	var CommitModel = Backbone.Model.extend({

		idAttribute: "sha",

		defaults: {
			sha: null,
			commit: {},
			comments_url: ""
		}
	});

	return CommitModel;
});