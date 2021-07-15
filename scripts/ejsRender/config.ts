import * as path from 'path';

const ROOT = path.join(__dirname, '../../');

const ejsData = {
  targets: ['web'],
  miniappType: 'runtime',
  mpa: false,
  pha: false,
};

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
    },
    'app-ts': { target: path.join(ROOT, 'scaffolds/app-ts/'), data: ejsData },
    'app-midway-faas': { target: path.join(ROOT, 'scaffolds/app-midway-faas/'), data: ejsData },
    'app-midway-ssr': { target: path.join(ROOT, 'scaffolds/app-midway-faas/'), data: ejsData },
  },
};
