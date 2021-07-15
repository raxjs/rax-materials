// watch and render scaffolds ejs templates to temp dir
import * as fs from 'fs-extra';
import * as path from 'path';
import * as chokidar from 'chokidar';
import generate from './generate';
import config from './config';

chokidar.watch(path.join(__dirname, '../../scaffolds/'), { ignoreInitial: true }).on('all', (event, file) => {
  const { targets, tmpDir } = config;
  const keys = Object.keys(targets);

  const index = keys.map((key) => targets[key].target).findIndex((target) => file.indexOf(target) === 0);
  if (index !== -1) {
    const key = keys[index];
    const target = targets[key];

    if (file.endsWith('.ejs')) {
      generate(key);
    } else {
      // do copy
      fs.copySync(file, path.join(tmpDir, key, file.replace(target.target, '')));
    }
  }
});
