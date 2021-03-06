import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import bundleSize from 'rollup-plugin-bundle-size'
import pkg from './package.json'

export default {
  entry: 'src/promisifyDOMSelector.js',
  format: 'umd',
  moduleName: 'promisifyDOMSelector',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    bundleSize(),
  ],
  dest: pkg.main,
}
