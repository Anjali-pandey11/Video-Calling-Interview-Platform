import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/


export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

return defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // yeh add karo
    build: {
      outDir: 'dist',
    },
 server: {
    proxy: {
      "/api/execute": {
        target: env.VITE_ONLINECOMPLILER_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/execute/, "/api/run-code-sync"),
        headers: {
          "Authorization": env.VITE_ONLINECOMPILER_API_KEY,
        },
      },
    },
  },

})

}
