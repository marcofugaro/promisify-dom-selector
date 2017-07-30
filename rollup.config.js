import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'
import pkg from './package.json'

export default {
  entry: 'src/index.js',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify({}, minify)
  ],
  targets: [
		{
			format: 'umd',
			moduleName: 'promisifyDOMSelector',
			dest: pkg.main,
		},
		{
			format: 'es',
			dest: pkg.module,
		}
	]
}
