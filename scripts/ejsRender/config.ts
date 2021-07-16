import * as path from 'path';

const ROOT = path.join(__dirname, '../../');

const ejsData = {
  targets: ['web'],
  miniappType: 'runtime',
  mpa: false,
  pha: false,
};

const previewData = [
  { name: 'Web', message: '建议使用手机浏览器扫码', output: 'web/index.html' },
  // { name: 'Weex', message: '建议使用手机淘宝扫码', output: 'weex/index.js' },
];

// Add preview to ejs scaffolds template.
// Build or dev scaffolds project you should see blew config first.
export default {
  tmpDir: path.join(ROOT, 'scaffoldsTemps'),
  targets: {
    // For example config 'app-js-base': { target: path.join(__dirname, 'scaffolds/app-js/'), data: {targets: ['web']} }
    // Will pass EJS target('scaffolds/app-js') template and the config data got 'scaffoldsTempDir/app-js-base' result
    'app-js': {
      target: path.join(ROOT, 'scaffolds/app-js/'), // target template path
      data: ejsData, // ejs render data
      preview: previewData, // preview url for qrcode
    },
    'app-ts': { target: path.join(ROOT, 'scaffolds/app-ts/'), data: ejsData, preview: previewData },
    'app-midway-faas': { target: path.join(ROOT, 'scaffolds/app-midway-faas/'), data: ejsData, preview: previewData },
    'app-midway-ssr': { target: path.join(ROOT, 'scaffolds/app-midway-faas/'), data: ejsData, preview: previewData },
  },
};
