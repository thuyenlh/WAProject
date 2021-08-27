var table;
api_url = "http://127.0.0.1:9999/get_data";

// function getData() {
//     fetch(api_url)
// 	.then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Lỗi, mã lỗi ' + response.status);
//         return;
//       }
//       // parse response data
//       response.json().then(data => {
//         console.log(data);
//       })
//     }
// 	)
// 	.catch(err => {
// 		console.log('Error :-S', err)
// 	});
// }

function initTableData() {
    //Data from an URL ?
    $.get(api_url, function(responseData) {
    	//Mofify "responseData" before showing ?
    	var modifiedUsers = responseData.map(eachUser => {

    		return {
    			full_name: eachUser.first_name + " " + eachUser.last_name,
				birthday: eachUser.birthday,
    			email: eachUser.email,
                address: eachUser.address,
                city: eachUser.city,
                phone1: eachUser.phone1,
				phone2: eachUser.phone2,
                web: eachUser.web,
    		};
    	});
    	table = $('#users').DataTable({
    	"processing": true,
    	data: modifiedUsers,
    	columns:[
    		{ data: 'full_name' },
			{ data: 'birthday'},
    		{ data: 'email' },
    		{ data: 'address' },
    		{ data: 'city' },
            { data: 'phone1' },
			{ data: 'phone2' },
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

