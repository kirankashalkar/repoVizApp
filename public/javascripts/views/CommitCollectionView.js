/**
 * Commits list view
 */

define([
	'marionette',
	'./CommitItemView'
], function(
	Marionette,
	CommitItemView) {

	var CommitCollectionView = Marionette.CollectionView.extend({
		
		childView: CommitItemView,

		tagName: 'table',

		initialize: function(options) {
			_.extend(this, options);
		},

		buildChildView: function(child, ChildViewClass, childViewOptions){
			var options = _.extend({model: child}, childViewOptions);
			var view = new ChildViewClass(options);
			return view;
		},

		onRender: function() {
			// could've done this with composite view but overkill for this assignment
			this.$el
				.addClass("large-12")
				.addClass("columns")
				.append("<thead><tr><th>Commit Message</th><th>Date</th><th>Author</th><th>Comments</th></tr></thead>");
		}

	});

	return CommitCollectionView;
});