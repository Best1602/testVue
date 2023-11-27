import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5176, // หรือพอร์ตที่คุณต้องการ
    // host: "192.168.1.0.202", // เปลี่ยนเป็น IP Address ของคุณ
  },
})
