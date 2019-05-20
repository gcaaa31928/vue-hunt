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

export default main;
