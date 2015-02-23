/**
 * Commit API view
 */

define([
	'marionette',
	'./CommitItemView',
	'./EmptyView'
], function(
	Marionette,
	CommitItemView,
	EmptyView) {

	var CommitCollectionView = Marionette.CollectionView.extend({

		emptyView: EmptyView,
		
		childView: CommitItemView,

		tagName: 'table',

		initialize: function(options) {
			_.extend(this, options);
		},

		buildChildView: function(child, ChildViewClass, childViewOptions){
			// build the final list of options for the childView class
			var options = _.extend({model: child}, childViewOptions);
			// create the child view instance
			var view = new ChildViewClass(options);
			// return it
			return view;
		},

		onRender: function() {
			// could've done this with composite view but overkill here
			this.$el
				.addClass("large-12")
				.addClass("columns")
				.append("<thead><tr><th>Commit Message</th><th>Date</th><th>Author</th><th>Comments</th></tr></thead>");
		}

	});

	return CommitCollectionView;
});