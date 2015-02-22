define([
    'marionette', 
    'text!../templates/welcome.tpl'
], function(
    Marionette, 
    WelcomeTpl) {
    var WelcomeModel = Backbone.Model.extend({
        defaults: {
            title: 'RepoViz'
        }
    });
    //ItemView provides some default rendering logic
    return Marionette.ItemView.extend( {
        //Template HTML string
        template: WelcomeTpl,
        
        model: new WelcomeModel(),

        // View Event Handlers
        events: {

        }
    });
});