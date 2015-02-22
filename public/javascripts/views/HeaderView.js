define([
    'marionette', 
    'text!../templates/header.tpl'
], function (
    Marionette, 
    HeaderTpl) {
    //ItemView provides some default rendering logic
    return Marionette.ItemView.extend({
        template: HeaderTpl,

        initialize: function(options) {
            _.extend(this, options);
        }
    });
});