/**
 * Repos list view
 */

define([
	'marionette',
	'./RepoItemView',
	'./EmptyView'
], function(
	Marionette,
	RepoItemView,
	EmptyView) {

	var RepoCollectionView = Marionette.CollectionView.extend({

		emptyView: EmptyView,
		
		childView: RepoItemView,

		tagName: 'ul',

		initialize: function(options) {
			_.extend(this, options);
		},

		buildChildView: function(child, ChildViewClass, childViewOptions){
			var options = _.extend({model: child}, childViewOptions);
			var view = new ChildViewClass(options);
			return view;
		}

	});

	return RepoCollectionView;
});