import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        minify: false,
        minifySyntax: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                pages: resolve(__dirname, 'pages/superadmin_dashboard_1.html'),
                pages_1: resolve(__dirname, 'pages/superadmin_dashboard_2.html'),
            },
        }
    }
})