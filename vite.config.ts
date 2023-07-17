import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    assetsInlineLimit: 10 * 1024

  }
,
server: {
  host: '0.0.0.0'
},
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
},
});
