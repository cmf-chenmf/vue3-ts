import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts']
  },
  // server: {
    // hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
    // // 服务配置
    // port: 3000, // 类型： number 指定服务器端口;
    // open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    // cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
    // host: '0.0.0.0', // IP配置，支持从IP启动
  // },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: `@import '@/assets/scss/variables.scss';`,
      }
    }
  }
})
