/**
 * RepoViz App main controller
 */
define([
    'RepoVizApp', 
    'backbone', 
    'marionette', 
    '../views/WelcomeView',
    '../views/InputView',
    '../views/RepoLayout'
], function (
    RepoVizApp, 
    Backbone, 
    Marionette, 
    WelcomeView, 
    InputView,
    RepoLayout) {

    var vent = new Backbone.Wreqr.EventAggregator();

    var inputView = new InputView({
        vent: vent
    });

    var welcomeView = new WelcomeView({
        vent: vent
    });

    var repoLayout = new RepoLayout({
        vent: vent
    });

    return Backbone.Marionette.Controller.extend({
        initialize: function (options) {
            RepoVizApp.inputRegion.show(inputView);
        },
        //gets mapped to in RepoVizRouter's appRoutes
        index: function () {
            RepoVizApp.mainRegion.show(welcomeView);
        },
        repos: function () {
            RepoVizApp.mainRegion.show(repoLayout);
        }
    });
});