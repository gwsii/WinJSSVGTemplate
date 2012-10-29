// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509

var SVGDemo;
(function (SVGDemo) {
	var Converters = (function () {
		function Converters() { }
		Converters.svgAttr = WinJS.Binding.initializer(function (source, sourceProperty, dest, destProperty) {
			dest.setAttributeNS(null, destProperty[0], source[sourceProperty[0]]);
		});
		Converters.tintColor = WinJS.Binding.initializer(function (source, sourceProperty, dest, destProperty) {
			function getR(color) {
				return parseInt(color.substring(1, 3), 16);
			}
			function getG(color) {
				return parseInt(color.substring(3, 5), 16);
			}
			function getB(color) {
				return parseInt(color.substring(5, 7), 16);
			}
			function hex(num) {
				var str = num.toString(16);
				if (str.length == 1) {
					return '0' + str;
				}
				return str;
			}
			function scaleColor(factor, color) {
				var r = Math.floor(factor * getR(color));
				var g = Math.floor(factor * getG(color));
				var b = Math.floor(factor * getB(color));
				return "#" + hex(r) + hex(g) + hex(b);
			}
			var color = dest[destProperty[0]][destProperty[1]];
			var tinted = scaleColor(getR(color) / 255, source[sourceProperty[0]]);
			dest[destProperty[0]][destProperty[1]] = tinted;
		});
		return Converters;
	})();
	SVGDemo.Converters = Converters;
})(SVGDemo || (SVGDemo = {}));



(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {

    	args.setPromise(WinJS.UI.processAll().then(function () {
    		var svgStarTemplateWidth = 329;
    		var svgStarTemplateHeight = 326;

    		var starTemplate = WinJS.Utilities.query("#starTemplate")[0].winControl;

    		function renderStar(starInfo) {
    			starTemplate.render(starInfo).then(function (div) {
    				div.style.width = (svgStarTemplateWidth * starInfo.scale) + "px";
    				div.style.height = (svgStarTemplateHeight * starInfo.scale) + "px";
    				div.style.display = "inline-block";

    				document.body.appendChild(div);
    			});
    		}

    		var starYellow = {
    			color: "#FFFF00",
    			svgScale: "scale(1.0)",
				scale: 1.0
    		};

    		var starOrangeSmall = {
    			color: "#FF8800",
    			svgScale: "scale(0.25)",
    			scale: 0.25
    		};

    		var starBlueBig = {
    			color: "#0000FF",
    			svgScale: "scale(2)",
    			scale: 2
    		};

    		renderStar(starYellow);
    		renderStar(starOrangeSmall);
    		renderStar(starBlueBig);
    	}));
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
