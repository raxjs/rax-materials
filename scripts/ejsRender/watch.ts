// watch and render scaffolds ejs templates to temp dir
import * as fs from 'fs-extra';
import * as path from 'path';
import * as chokidar from 'chokidar';
import generate from './generate';
import { IConfig } from './interface';
import * as config from '../../ejsRender.config';

chokidar.watch(path.join(__dirname, '../../scaffolds/'), { ignoreInitial: true }).on('all', (event, file) => {
  const { scaffolds, tmpDir } = config as IConfig;

  const scaffoldConfig = scaffolds.find((scaffold) => file.indexOf(scaffold.target) === 0);

  if (scaffoldConfig !== undefined) {
    if (file.endsWith('.ejs')) {
      generate(scaffoldConfig);
    } else {
      // do copy
      fs.copySync(file, path.join(tmpDir, scaffoldConfig.name, file.replace(scaffoldConfig.target, '')));
    }
  }
});
