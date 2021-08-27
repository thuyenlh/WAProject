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
let __age = 0;
function initTableData() {
  //Data from an URL ?
  $.get(api_url, function (responseData) {
    //Mofify "responseData" before showing ?
    var modifiedUsers = responseData.map((eachUser) => {
      var birthday = eachUser.birthday;
      var first_name = eachUser.first_name;
      var last_name = eachUser.last_name;
      var _age;
      _age = fetch("../assemblyscript/build/optimized.wasm")
        .then((response) => response.arrayBuffer())
        .then((buffer) => WebAssembly.instantiate(buffer))
        .then((module) => {
          return module.instance.exports.age(2021, parseInt(birthday));
          //return module.instance.exports.age(2021,birthday);
        })
        .catch((error) => console.error(error));

      let obj = {
        full_name: first_name + " " + last_name,
        email: eachUser.email,
        address: eachUser.address,
        city: eachUser.city,
        phone1: eachUser.phone1,
        phone2: eachUser.phone2,
        web: eachUser.web,
      };

      _age
        .then((result) => {
          Object.assign(obj, { age: result });
        })
        .catch((err) => console.log(err));
      console.log(obj);
      return obj;
    });
    table = $("#users").DataTable({
      processing: true,
      data: modifiedUsers,
      columns: [
        { data: "full_name" },
        { data: "age" },
        { data: "email" },
        { data: "address" },
        { data: "city" },
        { data: "phone1" },
        { data: "phone2" },
        { data: "web" },
      ],
    });
  }).fail(function () {
    alert("Cannot get data from URL");
  });
}

$(document).ready(function () {
  initTableData();
  $("#list-header").on({
    mouseenter: function () {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function () {
      $(this).css("background-color", "lightblue");
    },
  });
  $("#btnReloadData").on("click", function () {
    //alert("reload data...")
    table.ajax.reload();
  });
});
