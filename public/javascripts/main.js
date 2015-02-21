require.config({
    paths: {
    	jquery: 'vendor/jquery/jquery'
    },
    shim: {

    }
});


define(['jquery'], function($) {
	console.log('jquery is ', $);
	$.ajax({
		// url: "https://api.github.com/orgs/Netflix/repos",
		url: "http://api.github.com/repos/Netflix/netflix-graph/commits",

		success: function(result){
			console.log('yes result', JSON.stringify(result));
			var mainui = $("#main_ui");
			console.log(mainui);
        	$("#main_ui").text(JSON.stringify(result));
		},
		error: function(result) {
			console.log('no result', result);
        	$("#main_ui").text(JSON.stringify(result));
		}
	});
});

// require(['MainApp'], function(MainApp) {

// });