import { hooks, createConfiguration } from '@midwayjs/hooks';
import cloud from 'wx-server-sdk';

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV as unknown as string,
});

export default createConfiguration({
  imports: [
    hooks(),
  ],
});
