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
                pages_2: resolve(__dirname, 'pages/chief_collection_manager_1.html'),
                pages_3: resolve(__dirname, 'pages/chief_collection_manager_2.html'),
                pages_4: resolve(__dirname, 'pages/lawyer_dashboard.html'),
                pages_5: resolve(__dirname, 'pages/superadmin_dashboard_3.html'),
                pages_6: resolve(__dirname, 'pages/credit_manager_dashboard.html'),
                pages_7: resolve(__dirname, 'pages/analyst_dashboard.html'),
                pages_8: resolve(__dirname, 'pages/login_page_1.html'),
                pages_9: resolve(__dirname, 'pages/login_page_2.html'),
                pages_10: resolve(__dirname, 'pages/login_page_3.html'),
                pages_11: resolve(__dirname, 'pages/marketing_manager.html'),
            },
        }
    }
})