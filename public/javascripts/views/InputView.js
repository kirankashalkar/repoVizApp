/**
 * Input view
 */
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
        	'repoName': '#repoName',
        },

        events: {
        	'click @ui.submitButton': 'queryRepo',
        	'keypress @ui.repoName': 'checkReturn'
        },

        // capture return key to accept input for checking
        // would do it via events on the vent to the approuter for a prod app
        checkReturn: function(e) {
        	if (e.which == 13) {
        		e.preventDefault();
        		if (window.location.href.indexOf('#repos') == -1) {
        			window.location.href += '#repos';
        		}
        		// this.ui.submitButton.click();
        		this.queryRepo();
        	}
        },

        queryRepo: function() {
        	var inputRepoName = this.ui.repoName.val();
        	this.vent.trigger('input:repoName', inputRepoName);
        }
    });
});