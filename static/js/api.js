var urlBase = "http://106.15.178.216:3000"
// var urlBase = "http://localhost:3000"

function request(url, info, callback) {
	$.ajax({
		type: "post",
		url: urlBase + url,
		dataType: "json",
		data: info,
		success: function(data) {
			callback(data);
		},
		error: function(jqXHR) {
			console.log("Error: " + jqXHR.status);
			callback({
				err_code: 10000,
				err_msg: "操作失败",
			});
		}
	});
}
