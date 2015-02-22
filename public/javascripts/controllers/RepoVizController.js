define([
    'RepoVizApp', 
    'backbone', 
    'marionette', 
    '../views/WelcomeView', 
    '../views/HeaderView',
    '../views/InputView',
    '../views/RepoLayout',
    '../views/CommitLayout',
], function (
    RepoVizApp, 
    Backbone, 
    Marionette, 
    WelcomeView, 
    HeaderView,
    InputView,
    RepoLayout,
    CommitLayout) {

    var vent = new Backbone.Wreqr.EventAggregator();
    var headerView = new HeaderView({
                vent: vent
    });

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

            RepoVizApp.headerRegion.show(headerView);
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