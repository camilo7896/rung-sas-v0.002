import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // Esto permite que el servidor escuche en todas las interfaces de red
    port: 3000, // Puedes cambiar el puerto si es necesario
  },
  plugins: [react()],
})
