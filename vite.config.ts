import { resolve } from 'node:path'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve('src', 'resources/index.js'),
            name: 'TestAdmin',
            formats: ['es', 'umd'],
            fileName: (format) => `test-admin.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
        },
    },
});