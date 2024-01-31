import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
    plugins: [vue()],
    build:{
        outDir:'dist/umd',
        lib:{
            entry: 'src/lib.js',
            name:'VueCom',
            fileName:'index',
            formats:['umd']
        },
        rollupOptions:{
            external:['vue'],
            output:{
                exports:'named',
                globals: {
                    vue: 'Vue',
                },
            }
        }
    }
})
