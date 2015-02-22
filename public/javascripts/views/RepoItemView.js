/**
 * Repo API view
 */

define([
	'marionette',
	'text!../templates/repo.tpl'
], function(
	Marionette,
	repoTpl) {

	var RepoItemView = Marionette.CollectionView.extend({
		
		template: repoTpl,		
		tagName: "li",

		initialize: function(options) {
			_.extend(this, options);
		},
		
		onRender: function() {
			var html = Marionette.Renderer.render(this.template, {
				name: this.model.get('name'),
				forks_count: this.model.get('forks_count'),
				stargazers_count: this.model.get('stargazers_count'),
				commits_url: this.model.get('commits_url')
			});

			this.$el.append(html);
		}
	});

	return RepoItemView;
});