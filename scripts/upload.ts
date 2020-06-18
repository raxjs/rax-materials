import * as oss from 'ali-oss';
import * as path from 'path';

const bucket = 'iceworks';
const accessKeyId = process.env.ACCESS_KEY_ID;
const accessKeySecret = process.env.ACCESS_KEY_SECRET;

oss({
  bucket,
  endpoint: 'oss-cn-hangzhou.aliyuncs.com',
  accessKeyId,
  accessKeySecret,
  timeout: '120s',
})
  // @ts-ignore
  .put(
    path.join('assets', 'materials', 'rax-materials.json'),
    path.resolve(__dirname, '../build/materials.json')
  ).then(result => {
    console.log('materials.json upload success', result);
  });