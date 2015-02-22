define([
    'RepoVizApp', 
    'backbone', 
    'marionette', 
    '../views/WelcomeView', 
    '../views/HeaderView',
    '../views/RepoLayout',
    '../views/CommitLayout'
], function (
    RepoVizApp, 
    Backbone, 
    Marionette, 
    WelcomeView, 
    HeaderView) {
    
    return Backbone.Marionette.Controller.extend({
        initialize: function (options) {
            RepoVizApp.headerRegion.show(new HeaderView());
        },
        //gets mapped to in RepoVizRouter's appRoutes
        index: function () {
            RepoVizApp.mainRegion.show(new WelcomeView());
        },
        repos: function () {
            RepoVizApp.mainRegion.show(new RepoLayout());
        },
        commits: function () {
            RepoVizApp.mainRegion.show(new CommitLayout());
        }
    });
});