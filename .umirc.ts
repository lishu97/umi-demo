import { defineConfig } from 'umi';
import { resolve } from 'path'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '人员管理',
  // routes: [
  //   { path: '/login', component: '@/pages/login', title:'test2' },
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/index.html', component: '@/pages/index' },
  // ],
  alias: {
    src: resolve(__dirname, './src'),
    components: resolve(__dirname, './src/components'),
    models: resolve(__dirname, './src/models'),
    utils: resolve(__dirname, './src/utils'),
  },
  lessLoader: {
    modifyVars: {
      // 因在layout/index.jsx中引入的方案无法引入less变量、less函数
      // 故此处设置全局引入/less/index.less文件
      'hack': `true; @import "~@/less/global.less";`
    }
  }
});
