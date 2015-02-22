/**
 * The main application module
 */
define([
    'hogan', 
    'marionette'
], 
function(
    Hogan, 
    Marionette) {

    Marionette.Renderer.render = function(template, data, partials) {
        if (!template) {
            var error = new Error("Invalid template provided");
            error.name = "TemplateNotFoundError";
            throw error;
        }

        var compiledTemplate;
        if (typeof template === "string") {
            compiledTemplate = Hogan.compile(template);
        } 
        else if (typeof template == "function") {
            // for pre-compiled templates
            compiledTemplate = template();
            return compiledTemplate;
        }
        else if ((typeof template === "object") && ('render' in template) && (typeof template.render === "function")) {
            compiledTemplate = template;
        } 
        else {
            var error = new Error("Template not a string or a compiled template");
            error.name = "InvalidTemplateError";
            throw error;
        }

        return compiledTemplate.render(data, partials);
    },

    window.RepoVizApp = new Marionette.Application({});

    RepoVizApp.addRegions({
        headerRegion: "header",
        inputRegion: "#input",
        mainRegion: "#main"
    });

    RepoVizApp.addInitializer(function(options) {
        Backbone.history.start();
    });

    RepoVizApp.on("start", function() {
        console.log("RepoVizApp started");
    });

    RepoVizApp.on("close", function(){
        // cleanup here
    });

    return RepoVizApp;
});