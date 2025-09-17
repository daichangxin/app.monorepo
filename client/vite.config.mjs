import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';

const vendors = [
    'react',
    'react-dom',
    'react-router-dom',
];

export default defineConfig({
    plugins: [
        react(),
        EnvironmentPlugin('all'),
        tailwindcss(),
    ],
    server: {
        port: 8080,
        open: true,
    },
    optimizeDeps: {
        esbuildOptions: {
            target: 'esnext',
        },
        exclude: [],
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    define: {
        global: 'window',
    },
    build: {
        target: 'esnext',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        const isVendor = vendors.some((vendor) => id.includes(vendor));
                        if (isVendor) {
                            return 'vendor';
                        }
                    }
                },
            },
        },
    },
    esbuild: {
        legalComments: 'none',
    },
});
