import { defineConfig } from '@midwayjs/hooks';

export default defineConfig({
  source: 'src/cloud',
  routes: [
    {
      baseDir: 'function',
      event: 'wechat-miniprogram',
    },
  ],
  request: {
    client: '@midwayjs/hooks-miniprogram-client',
  },
});
