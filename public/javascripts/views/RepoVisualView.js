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

			// massage data to suit highcharts API
			var series = [];

			this.collection.models.forEach(function(model) {
				series.push({
					name: model.get('name'),
					data: [[
						model.get('open_issues_count'),
						model.get('stargazers_count'),
						model.get('forks_count')
						
					]]
				});
			});

			$('#container', this.$el).highcharts({

		        chart: {
		            type: 'bubble',
		            zoomType: 'xy',
		            plotBorderWidth: 1,
		        },

		        legend: {
		        	enabled: false
		        },

		        title: {
		            text: 'Repo Visualization Bubble Chart'
		        },

		        xAxis: {
		        	title: {
		        		text: 'Forks'
		        	},

		        },

		        yAxis: {
		        	title: {
		        		text: 'Stars'
		        	}
		        },

		        tooltip: {
		        	shared: true,
		        	useHTML: true,
		        	headerFormat: '<large><b>{series.name}</b></large><table>',
		            pointFormat: '<tr>' + 
		            	'<td style="color: {series.color}">Forks: </td>' +
		                '<td style="text-align: right"><b>{point.x}</b></td>' + 
		                '<td style="color: {series.color}">Stars: </td>' +
		                '<td style="text-align: right"><b>{point.y}</b></td>' +
		                '<td style="color: {series.color}">Issues: </td>' +
		                '<td style="text-align: right"><b>{point.z}</b></td>' +
		                '</tr>',
		            footerFormat: '</table><a href="#commits" class="commitsLink"><small>Check latest commits</small></a>'
		        },

		        series: series
		    });
		}

	});

	return RepoVisualView;
});