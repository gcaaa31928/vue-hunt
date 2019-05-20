class VueHunt {
	constructor() {
		this.mutationObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				console.log(mutation);
			});
		});
	}
}


export default VueHunt;
