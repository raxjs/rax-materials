// copy ejs result build result to scaffolds project
import * as fs from 'fs-extra';
import * as path from 'path';
import { spawnSync } from 'child_process';
import config from './config';

const BUILD_DIR = 'build';

export default function (directory: string) {
  const { targets, tmpDir } = config;
  const keys = Object.keys(targets);

  const index = keys.map((key) => targets[key].target).findIndex((target) => path.join(directory, './').indexOf(target) === 0);
  if (index !== -1) {
    const key = keys[index];
    const targetDir = path.join(tmpDir, key);

    spawnSync(
      'npm',
      ['install'],
      {
        stdio: 'inherit',
        cwd: targetDir,
      },
    );
    spawnSync(
      'npm',
      ['run', 'build'],
      {
        stdio: 'inherit',
        cwd: targetDir,
      },
    );
    fs.copySync(path.join(targetDir, BUILD_DIR), path.join(directory, BUILD_DIR));
  }
}
