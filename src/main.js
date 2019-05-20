'use strict'
import VueHunt from './vue-hunt.js'

export default {
	inject(win) {
		win.VueHunt = new VueHunt();
	}
};
