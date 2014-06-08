TestCase("AjaxCreateTest", {
	"test should return XMLHttpRequest object": function () {
		var xhr = tddjs.ajax.create();

		log(xhr.readyState);
		assertNumber(xhr.readyState);
		log(xhr["open"]);
		assert(tddjs.isHostMethod(xhr, "open"));
		log(xhr["send"]);
		assert(tddjs.isHostMethod(xhr, "send"));
		log(xhr["setRequestHeader"]);
		assert(tddjs.isHostMethod(xhr, "setRequestHeader"));
	}
});

function log(msg) {
		jstestdriver.console.log(msg);
}