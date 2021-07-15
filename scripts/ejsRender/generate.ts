/* eslint-disable no-await-in-loop */
// render a scaffold ejs template to temp dir
import * as fs from 'fs-extra';
import * as path from 'path';
import { formatScaffoldToProject } from '@iceworks/generate-project';
import config from './config';

export default async function (key: string) {
  const { targets, tmpDir } = config;

  const target = targets[key];
  const tempTarget = path.join(tmpDir, '.temp', key);

  fs.copySync(target.target, tempTarget);

  try {
    console.log(`Generating ${key} project...`);
    await formatScaffoldToProject(tempTarget, '', target.data);

    // Why copy twice? Because the target project may contain the node_modules.
    fs.copySync(tempTarget, path.join(tmpDir, key));
  } catch (e) {
    console.log(`Format scaffold '${target.target}' error:`, e);
  }
}
