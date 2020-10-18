// import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
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
      exports: 'default',
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
    copy({
      targets: [
        // move the UMD build into the docs folder (so it can be used by the live demo)
        {
          src: pkg.browser,
          dest: 'docs',
        },
      ],
    }),
  ],
};
