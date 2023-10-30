import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'iife',
        },
        {
            file: 'dist/bundle.min.js',
            format: 'iife',
            plugins: [terser()],
        },
    ],
};
