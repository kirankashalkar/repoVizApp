/**
 * Repo API view
 */

define(['./RepoItemView'], function(RepoItemView) {

	var RepoCollectionView = Marionette.CollectionView.extend({
		
		childView: RepoItemView,

		initialize: function(options) {
			_.extend(this, options);
		},

		buildChildView: function(item, ChildView) {
			var view = new ChildView({
				model: item
			});

			return view;
		},

		collectionEvents: {
			'change': function() {
				$('#repo_collection_view');
			}
		},

		onAddChild: function(childView) {
			// if you need to change the view
		},

		onRender: function() {
			console.log('repoCollectionView rendered');
			console.log(this.$el);
		}
	});

	return RepoCollectionView;
});