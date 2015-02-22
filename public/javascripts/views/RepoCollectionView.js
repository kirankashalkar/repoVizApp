/**
 * Repo API view
 */

define([
	'marionette',
	'./RepoItemView'
], function(
	Marionette,
	RepoItemView) {

	var NoChildrenView = Backbone.Marionette.ItemView.extend({
		template: "<div>Loading data... </div>"
	});


	var RepoCollectionView = Marionette.CollectionView.extend({

		emptyView: NoChildrenView,
		
		childView: RepoItemView,

		tagName: 'ul',

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
		}
		
	});

	return RepoCollectionView;
});