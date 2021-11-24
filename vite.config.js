import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
// import styleImport from 'vite-plugin-style-import'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    createVuePlugin(),
    Components({
      resolvers: [
        AntDesignVueResolver(),
      ]
    }),
    // styleImport({
    //   libs: [{
    //     libraryName: 'ant-design-vue',
    //     esModule: true,
    //     resolveStyle: (name) => {
    //       return `ant-design-vue/es/${name}/style/css`
    //     }
    //   }]
    // })
  ]
})