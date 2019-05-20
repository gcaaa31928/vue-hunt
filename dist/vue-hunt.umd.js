(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.moduleName = factory());
}(this, function () { 'use strict';

	class VueHunt {
		constructor() {
			this.mutationObserver = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation) {
					console.log(mutation);
				});
			});
		}
	}

	var main = {
		inject(win) {
			win.VueHunt = new VueHunt();
		}
	};

	return main;

}));
