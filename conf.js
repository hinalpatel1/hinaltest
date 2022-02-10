
exports.config = {
	framework: 'jasmine',
	specs:['./spec/spec.js'],
	directconnect: true,

	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 60000,
		isVerbose: true,
		includeStackTrace: true,
	  },
	multiCapabilities: [
		{
			'browserName': 'chrome',
		},
	],

	onComplete() {
		console.log("test execution Completed");
	},

	onPrepare(){
		console.log("test execution started");
		
		browser.waitForAngularEnabled(false);
		browser.manage().window().maximize();

		
	},
}