(function () {

	var ajax = tddjs.ajax;

	TestCase("GetRequest", {
		"test should define get method": function () {
			assertFunction(ajax.get);
		},

		"test should throw error without url": function () {
			assertException(function() {
				ajax.get();
			}, "TypeError")
		}
	});

}());