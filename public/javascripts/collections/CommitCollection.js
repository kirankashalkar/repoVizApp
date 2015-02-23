
/**
 * Commit API collection
 */

define([
	'backbone', 
	'../models/CommitModel'
], function (
	Backbone,
	CommitModel) {
	var CommitCollection = Backbone.Collection.extend({
		url: function() {
			return this.repo + '/commits';
		},

		model: CommitModel,
		// the commits do come in time order, but just to be sure
		comparator: function(a, b) {
			aDate = new Date(a.get('commit').author.date);
			bDate = new Date(b.get('commit').author.date);
			if (aDate.getTime() > bDate.getTime()) {
				return -1;
			} else {
				return 1;
			}
		},

		initialize: function(options) {
			_.extend(this, options);
		}

	});

	return CommitCollection;
});