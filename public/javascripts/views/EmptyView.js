/**
 * Empty view
 */

define([
	'marionette'
], function (Marionette) {

	var EmptyView = Backbone.Marionette.ItemView.extend({
		// overkill to add a new template file and make this generic right now
		template: '<h1 class="empty">Organization Not Found</h1>'
	});

	return EmptyView;
});	