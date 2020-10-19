import { join } from 'path';

module.exports = (appInfo: any) => {
  const exports = {} as any;

  exports.staticFile = {
    dir: join(appInfo.baseDir, '../build/web'),
  };
  return exports;
};
