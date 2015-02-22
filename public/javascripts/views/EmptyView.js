define([
	'marionette'
], function (Marionette) {
	
	var EmptyView = Backbone.Marionette.ItemView.extend({
		template: "<div>No such organization.</div>"
	});

	return EmptyView;
});	