import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'test1',
  routes: [
    { path: '/login', component: '@/pages/login', title:'test2' },
    { path: '/index.html', component: '@/pages/index' },
  ],
});
