/**
 * Main require js file to include
 */
require.config({
    paths: {
    	jquery: 'vendor/jquery/jquery',
    	modernizr: 'vendor/modernizr/modernizr',
        foundation: 'vendor/foundation/foundation',
        underscore: 'vendor/underscore/underscore',
        template: 'vendor/hogan.js/web/builds/2.0.0/template-2.0.0',
        hogan: 'vendor/hogan.js/web/builds/2.0.0/hogan-2.0.0',
        backbone: 'vendor/backbone/backbone',
        marionette: 'vendor/backbone/backbone.marionette',
        text: 'vendor/require/text',
        d3: 'vendor/d3/d3',
        FastClick: 'vendor/fastclick/lib/fastclick',
        highcharts: 'vendor/highcharts/highcharts',
        highchartsmore: 'vendor/highcharts/highcharts-more',
        exporting: 'vendor/highcharts/exporting',

        /* Foundation */
        'foundation.core': 'vendor/foundation/js/foundation',
        'foundation.abide': 'vendor/foundation/js/foundation/foundation.abide',
        'foundation.accordion': 'vendor/foundation/js/foundation/foundation.accordion',
        'foundation.alert': 'vendor/foundation/js/foundation/foundation.alert',
        'foundation.clearing': 'vendor/foundation/js/foundation/foundation.clearing',
        'foundation.dropdown': 'vendor/foundation/js/foundation/foundation.dropdown',
        'foundation.interchange': 'vendor/foundation/js/foundation/foundation.interchange',
        'foundation.joyride': 'vendor/foundation/js/foundation/foundation.joyride',
        'foundation.magellan': 'vendor/foundation/js/foundation/foundation.magellan',
        'foundation.offcanvas': 'vendor/foundation/js/foundation/foundation.offcanvas',
        'foundation.orbit': 'vendor/foundation/js/foundation/foundation.orbit',
        'foundation.reveal': 'vendor/foundation/js/foundation/foundation.reveal',
        'foundation.tab': 'vendor/foundation/js/foundation/foundation.tab',
        'foundation.tooltip': 'vendor/foundation/js/foundation/foundation.tooltip',
        'foundation.topbar': 'vendor/foundation/js/foundation/foundation.topbar'
    },
    shim: {
    	'modernizr': {
            exports: 'Modernizr'
        },
    	'underscore': {
            exports: '_'
        },
        'template': {
            exports: 'template'        
        },
        'hogan': {
            deps: [ 'template' ],
            exports: 'Hogan'
        },
		d3: {
		    exports: 'd3'
		},
		'backbone': {
            deps: [ 'underscore', 'jquery'],
            exports: 'Backbone'
        },
        'marionette': {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        'FastClick': {
        	deps: [],
        	exports: 'FastClick'
        },

        'highcharts': {
            deps: ['jquery'],
            exports: 'highcharts'
        },
        'highchartsmore': {
            deps: ['highcharts', 'jquery'],
            exports: 'highchartsmore'
        },
        'exporting': {
            deps: ['highcharts', 'jquery'],
            exports: 'highcharts'
        },
        

        /* Foundation */
        'foundation.core': {
            deps: [
                'jquery',
                'modernizr'
            ],
            exports: 'Foundation'
        },
        'foundation.abide': {
            deps: [
                'foundation.core'
            ]
        },
        'foundation.accordion': {
            deps: [
                'foundation.core'
            ]
        },
        'foundation.alert': {
            deps: [
                'foundation.core'
            ]
        },
        'foundation.clearing': {
            deps: [
                'foundation.core'
            ]
        },
        'foundation.dropdown': {
            deps: [
                'foundation.core'
            ]
        },
        'foundation.interchange': {
            deps: [
                'foundation.core'
            ]
        },
        'foundation.joyride': {
            deps: [
                'foundation.core',
                'foundation.cookie'
            ]
        },
        'foundation.magellan': {
            deps: [
                'foundation.core'
            ]
        },
        'foundation.offcanvas': {
            deps: [
                'foundation.core'
            ]
        },
        'foundation.orbit': {
            deps: [
                'foundation.core'
            ]
        },
        'foundation.reveal': {
            deps: [
                'foundation.core'
            ]
        },
        'foundation.tab': {
            deps: [
                'foundation.core'
            ]
        },
        'foundation.tooltip': {
            deps: [
                'foundation.core'
            ]
        },
        'foundation.topbar': {
            deps: [
                'foundation.core'
            ]
        },


    }
});


require([
    'jquery', 
    'modernizr', 
    'foundation.core', 
    'RepoVizApp', 
    'routers/RepoVizRouter', 
    'controllers/RepoVizController'
], function(
    $, 
    Modernizr, 
    foundation,
    RepoVizApp, 
    RepoVizRouter, 
    RepoVizController) {
		RepoVizApp.appRouter = new RepoVizRouter({
            controller: new RepoVizController()
        });

        RepoVizApp.start();

        $(document).foundation();
});

