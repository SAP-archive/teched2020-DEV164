module.exports = function(config) {
	"use strict";

	config.set({
        frameworks: ["ui5"],
		ui5: {
			url: "https://sapui5.hana.ondemand.com"
		},
		preprocessors: {
			"{webapp,webapp/!(test)}/!(mock*).js": ["coverage"]
		},
		coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: "html",
					dir: "coverage"
				},
				{
					type: "text"
				}
			],
			check: {
				each: {
					statements: 100,
					branches: 100,
					functions: 100,
					lines: 100
				}
			}
		},
		reporters: ["progress", "coverage"],

        browsers: ["ChromiumHeadless"],
        
        browserConsoleLogOptions: {
			level: "error"
        },

		singleRun: true
	});
};
