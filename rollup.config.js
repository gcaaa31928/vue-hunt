export default {
	input: 'src/main.js',
	output: [{
		file: 'dist/vue-hunt.cjs.js',
		format: 'cjs'
	}, {
		file: 'dist/vue-hunt.umd.js',
		name: 'moduleName',
		format: 'umd'
	}, {
		file: 'dist/vue-hunt.es.js',
		format: 'es'
	}, {
		file: 'dist/vue-hunt.js',
		format: 'iife',
		name: 'VueHunt'
	}]
};
