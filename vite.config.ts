import {resolve} from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
// import AutoImport from 'unplugin-auto-import/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    //   // imports: ['vue'],
    //
    //   // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
    //   resolvers: [
    //     ElementPlusResolver(),
    //   ]
    // }),
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
  //   hmr: {overlay: false}, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
  //   // 服务配置
  //   port: 6090, // 类型： number 指定服务器端口;
  //   open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
  //   cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
  //   host: '0.0.0.0', // IP配置，支持从IP启动
  //   proxy: {
  //     '/api': {
  //       target: process.env.VITE_APP_BASE_API,//target是你想要代理的后端地址
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
  //     }
  //   }
  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/scss/variables.scss';`,
      }
    }
  },
})
