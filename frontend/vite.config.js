import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
 server: {
    proxy: {
      "/api/execute": {
        target: "https://api.onlinecompiler.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/execute/, "/api/run-code-sync"),
        headers: {
          "Authorization": "bf9e6f89914442596fced8b2880b2bd4",
        },
      },
    },
  },

})
