import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

export default [
  {
    input: 'lib/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        // css will be extracted to a separate file, e.g.: dist/esm/index.css
        // users will have to import it from main.tsx like this: import 'alamoma/dist/esm/index.css' or just use a random component
        // need to find a better way or better location for index.css
        // src: https://stackoverflow.com/questions/53653434/is-it-possible-to-use-rollup-for-processing-just-css
        extract: true
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser()
    ],
    // To resolve issue: Hooks can only be called inside the body of a function component.
    // Reason: we're mistakenly bundling React itself into library, so we've got 2 Reacts
    // How to resolve: put react in external
    // src: https://github.com/facebook/react/issues/14721
    external: [
      'react',
      'react-dom',
    ],
  },
  {
    input: 'lib/index.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm'
      }
    ],
    external: [
      /\.css$/
    ],
    plugins: [dts.default()],
  }
]
