import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import pkg from './package.json'

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'promisifyDOMSelector',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
  dest: pkg.main,
}
