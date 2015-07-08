'use strict';

module.exports = function(app) {

	testBoot();
	function testBoot(){
		console.log(app.models.user);
	}
}