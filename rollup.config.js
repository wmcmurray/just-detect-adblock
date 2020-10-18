// import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: 'src/main.js',
  output: [
    // UMD build (browser-friendly)
    {
      file: pkg.browser,
      format: 'umd',
      name: 'justDetectAdblock',
    },

    // CommonJS build (for Node)
    {
      file: pkg.main,
      format: 'cjs',
    },

    // ES module build (for bundlers)
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    // resolve(),
    // commonjs(),
    terser(),
  ],
};
