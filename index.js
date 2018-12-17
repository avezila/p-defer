module.exports = function PDefer () {
	var ret = {};

	ret.promise = new Promise(function (resolve, reject) {
		ret.resolve = resolve;
		ret.reject = reject;
	});

	return ret;
};
