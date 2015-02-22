define([
    'marionette', 
    'text!../templates/input.tpl'
], function (
    Marionette, 
    InputTpl) {
    //ItemView provides some default rendering logic
    return Marionette.ItemView.extend({
        template: InputTpl,

        initialize: function(options) {
            _.extend(this, options);
        },

        ui: {
        	'submitButton': '#submitButton',
        	'repoName': '#repoName'
        },

        events: {
        	'click @ui.submitButton': 'queryRepo'
        },

        queryRepo: function() {
        	var inputRepoName = this.ui.repoName.val();
        	this.vent.trigger('input:repoName', inputRepoName);
        }
    });
});