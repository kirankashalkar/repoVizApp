/**
 * Repo API visual view
 */

define([
	'marionette',
	'highcharts',
	'highchartsmore',
	'text!../templates/repoVisualTpl.tpl'
], function(
	Marionette,
	highcharts,
	highchartsmore,
	RepoVisualTpl) {


	var RepoVisualView = Marionette.ItemView.extend({

		tagName: 'div',

		template: RepoVisualTpl,

		initialize: function(options) {
			_.extend(this, options);
		},

		onRender: function() {

			var vent = this.vent;

			// massage data to suit highcharts API
			var series = [];

			this.collection.models.forEach(function(model) {
				series.push({
					name: model.get('name'),
					data: [{
						name: model.get('name'),
						url: model.get('url'),
						z: model.get('open_issues_count'),
						y: model.get('stargazers_count'),
						x: model.get('forks_count')
					}]
				});
			});

			$('#container', this.$el).highcharts({

		        chart: {
		            type: 'bubble',
		            zoomType: 'xy',
		            plotBorderWidth: 1
		        },

		        legend: {
		        	enabled: false
		        },

		        title: {
		            text: 'Repo Visualization Bubble Chart'
		        },

		        xAxis: {
		        	title: {
		        		text: '# Forks'
		        	}
		        },

		        yAxis: {
		        	title: {
		        		text: '# Stars'
		        	}
		        },

		        tooltip: {
		        	shared: true,
		        	useHTML: true,
		        	headerFormat: '<large><b>{series.name}</b></large><table>',
		        	pointFormatter: function () {
		                var s = 
		                	'<tr>' + 
				            	'<td style="color:' + this.color + '">Forks: </td>' +
				                '<td style="text-align: right"><b>' + this.x + '</b></td>' + 
				                '<td style="color:' + this.color + '">Stars: </td>' +
				                '<td style="text-align: right"><b>' + this.y + '</b></td>' + 
				                '<td style="color:' + this.color + '">Issues: </td>' +
				                '<td style="text-align: right"><b>' + this.z + '</b></td>' + 
				            '</tr>';
						

		                return s;
		            },
		            footerFormat: '</table>'
		        },

		        plotOptions: {
		        	series: {
		        		cursor: 'pointer',
		        		point: {
		        			events: {
		        				click: function() {
		        					vent.trigger('repo:selected', this.url);
		        				}
		        			}
		        		}
		        	}
		        },

		        series: series
		    });
		}

	});

	return RepoVisualView;
});