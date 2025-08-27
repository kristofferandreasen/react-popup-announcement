const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const resolve = require('@rollup/plugin-node-resolve');
const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup').default;
const pkg = require('./package.json');

module.exports = {
  input: 'src/index.tsx',
  output: [
    { file: pkg.main, format: 'cjs', exports: 'named', sourcemap: true },
    { file: pkg.module, format: 'es', exports: 'named', sourcemap: true }
  ],
  plugins: [
    external(),
    postcss({ modules: true }),
    url(),
    svgr(),
    resolve({ browser: true, extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
     typescript({
      tsconfig: './tsconfig.json',
      rootDir: 'src',
      declaration: true,
      declarationDir: 'dist/types',
      sourceMap: true
    }),
    commonjs()
  ],
  external: ['react', 'react-dom']
};
