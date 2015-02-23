/**
 * Welcome view
 */
 define([
    'marionette', 
    'text!../templates/welcome.tpl'
], function(
    Marionette, 
    WelcomeTpl) {

    // overkill to move this out
    var WelcomeModel = Backbone.Model.extend({
        defaults: {
            title: 'RepoViz'
        }
    });

    return Marionette.ItemView.extend( {
        template: WelcomeTpl,
        
        model: new WelcomeModel(),

        initialize: function(options) {
            _.extend(this, options);
        }
    });
});