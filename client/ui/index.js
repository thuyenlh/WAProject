var table;
api_url = "http://127.0.0.1:9999/get_data";

// function getData() {
//     fetch(api_url, {
//         headers: {'Content-Type': 'application/json'},
//         method: 'GET'
//     })
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(text) {
//         console.log('Request successful', text);
//     })
//     .catch(function(error) {
//         log('Request failed', error)
//     });
// }

function initTableData() {
    //Data from an URL ?
    $.get(api_url, function(responseData) {
    	//Mofify "responseData" before showing ?
    	var modifiedUsers = responseData.map(eachUser => {
    		return {
    			first_name: eachUser.first_name,
				last_name: eachUser.last_name,
    			email: eachUser.email,
                address: eachUser.address,
                city: eachUser.city,
                phone: eachUser.phone1,
                web: eachUser.web,
    		};
    	});
    	table = $('#users').DataTable({
    	"processing": true,
    	data: modifiedUsers,
    	columns:[
    		{ data: 'first_name' },
			{ data: 'last_name' },
    		{ data: 'email' },
    		{ data: 'address' },
    		{ data: 'city' },
            { data: 'phone' },
            { data: 'web' },
    	]
    	});
    }).fail(function() {
    	alert( "Cannot get data from URL" );
    });
}

$(document).ready(function (){
	initTableData();
	$("#list-header").on({
		mouseenter: function() {
			$(this).css("background-color", "lightgray");
		},
		mouseleave: function(){
        	$(this).css("background-color", "lightblue");
    	}, 
	});
	$("#btnReloadData").on("click", function(){
		//alert("reload data...")
		table.ajax.reload();
	});
});

