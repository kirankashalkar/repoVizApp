/**
 * Repo API view
 */

define(['text!./templates/repo.tpl'], function(repoTpl) {

	var RepoItemView = Marionette.CollectionView.extend({
		
		template: repoTpl,		
		tagName: "li",

		initialize: function(options) {
			_.extend(this, options);
		},

		serializeData: function() {
			return {
				name: this.model.get('name'),
				forks: this.model.get('forks_count'),
				commits_link: this.model.get('commits_url')
			};
		},
		
		onRender: function() {
			console.log('RepoItemView rendered');
			console.log(this.$el);
		}
	});

	return RepoItemView;
});