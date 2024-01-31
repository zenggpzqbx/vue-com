import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build:{
        outDir:'dist/es',
        lib:{
            entry: 'src/lib.js',
            name:'VueCom',
            fileName:'index',
            formats:['es']
        },
        rollupOptions:{
            external:['vue']
        }
    }
})
