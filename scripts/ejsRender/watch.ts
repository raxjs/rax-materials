// watch and render scaffolds ejs templates to temp dir
import * as path from 'path';
import * as chokidar from 'chokidar';
import generate from './generate';
import config from './config';

chokidar.watch(path.join(__dirname, '../../scaffolds/'), { ignoreInitial: true }).on('all', (event, file) => {
  const { targets } = config;
  const keys = Object.keys(targets);

  const index = keys.map((key) => targets[key].target).findIndex((target) => file.indexOf(target) === 0);
  if (index !== -1) {
    const key = keys[index];
    generate(key);
  }
});
