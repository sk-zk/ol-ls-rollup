import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-import-css";

const terserConfig = {
  module: true,
}

export default [
  {
    input: 'main.js',
    watch: {
      include: 'js/**',
      clearScreen: false
    },
    output: {
      file: 'dist/main.js',
      format: 'es',
      plugins: [terser(terserConfig)]
    },
    plugins: [css(), nodeResolve()]
  },
];
