
var protocol = window.location.protocol;
var hostname = window.location.hostname;
var port = protocol === 'https:' ? '444' : '3000'
var urlBase = `${protocol}//${hostname}:${port}`
console.log(urlBase);
function request(url, info, callback) {
	$.ajax({
		type: "post",
		url: urlBase + url,
		dataType: "json",
		data: info,
		success: function (data) {
			callback(data);
		},
		error: function (jqXHR) {
			console.log("Error: " + jqXHR.status);
			callback({
				err_code: 10000,
				err_msg: "操作失败",
			});
		}
	});
}
