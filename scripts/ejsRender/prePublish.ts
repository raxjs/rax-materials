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
    const target = targets[key];
    const targetDir = path.join(tmpDir, key);

    spawnSync(
      'npm',
      ['install'],
      {
        stdio: 'inherit',
        cwd: targetDir,
      },
    );

    // Update temp config file to append scripts for tooltip(show qrcode and some information)
    try {
      const appJsonPath = path.join(targetDir, 'src/app.json');
      const buildJsonPath = path.join(targetDir, 'build.json');

      const appJson = fs.readJsonSync(appJsonPath);
      const buildJson = fs.readJsonSync(buildJsonPath);

      // Update app.json
      if (!appJson.scripts) {
        appJson.scripts = [];
      }
      const { name, version } = fs.readJsonSync(path.join(targetDir, 'package.json'));
      appJson.scripts.push(`<script>window.PREVIEW_URLS = [${target.preview.map((item) => `{ name: '${item.name}', message: '${item.message}', url: 'https://unpkg.com/${name}/@${version}/build/${item.output}' },`)}];</script>`);
      appJson.scripts.push('<script src="https://dev.g.alicdn.com/appworks/rax-scaffolds-preview-fab/0.0.1/index.js"></script>');

      // Update build.json
      buildJson.publicPath = './';

      // ReWrite
      fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));
      fs.writeFileSync(buildJsonPath, JSON.stringify(buildJson, null, 2));
    } catch (e) {
      console.log('Process config file failed: ', e);
    }

    spawnSync(
      'npm',
      ['run', 'build'],
      {
        stdio: 'inherit',
        cwd: targetDir,
      },
    );
    fs.copySync(path.join(targetDir, BUILD_DIR), path.join(directory, BUILD_DIR));

    // Use web result as scaffold home page
    const webResult = path.join(directory, BUILD_DIR, 'web');
    if (fs.existsSync(webResult)) {
      fs.copySync(webResult, path.join(directory, BUILD_DIR));
    }
  }
}
