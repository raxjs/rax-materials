const path = require('path');

const ROOT = path.join(__dirname, './');

const ejsData = {
  appType: 'miniapp',
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
module.exports = {
  tmpDir: path.join(ROOT, 'scaffoldsTemps'),
  scaffolds: [
    // For example: { name: 'app-js-base', target: path.join(ROOT, 'scaffolds/app-js/'), data: {targets: ['web']} }
    // Will pass EJS target('scaffolds/app-js') template and the config data got 'scaffoldsTempDir/app-js-base' result
    {
      target: path.join(ROOT, 'scaffolds/app-js/'), // target template path
      name: 'app-js', // temp dir name
      data: ejsData, // ejs render data
      preview: previewData, // preview url for qrcode
    },
    { target: path.join(ROOT, 'scaffolds/app-ts/'), name: 'app-ts', data: ejsData, preview: previewData },
    { target: path.join(ROOT, 'scaffolds/app-midway-faas/'), name: 'app-midway-faas', data: ejsData, preview: previewData },
    { target: path.join(ROOT, 'scaffolds/app-midway-faas/'), name: 'app-midway-ssr', data: ejsData, preview: previewData },
    { target: path.join(ROOT, 'scaffolds/app-shop/'), name: 'app-shop', data: ejsData, preview: previewData },
  ],
};
