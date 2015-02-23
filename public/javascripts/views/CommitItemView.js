/**
 * Commit API view
 */

define([
	'marionette',
	'text!../templates/commit.tpl'
], function(
	Marionette,
	commitTpl) {

	var CommitItemView = Marionette.CollectionView.extend({
		
		template: commitTpl,		
		tagName: "tr",

		initialize: function(options) {
			_.extend(this, options);
		},
		
		onRender: function() {
			var html = Marionette.Renderer.render(this.template, {
				sha: this.model.get('sha'),
				commit: this.model.get('commit'),
				comments_url: this.model.get('comments_url')
			});

			this.$el.append(html);
		}
	});

	return CommitItemView;
});