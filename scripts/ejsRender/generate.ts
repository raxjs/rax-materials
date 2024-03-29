/* eslint-disable no-await-in-loop */
// render a scaffold ejs template to temp dir
import * as fs from 'fs-extra';
import * as path from 'path';
import { formatScaffoldToProject } from '@iceworks/generate-project';
import { IConfig, IScaffold } from './interface';
import * as config from '../../ejsRender.config';

export default async function (scaffoldConfig: IScaffold) {
  const { tmpDir } = config as IConfig;
  const { target, name, data } = scaffoldConfig;

  const tempTarget = path.join(tmpDir, '.temp', name);

  fs.copySync(target, tempTarget);

  try {
    console.log(`Generating ${name} project...`);
    await formatScaffoldToProject(tempTarget, '', data);

    // Why copy twice? Because the target project may contain the node_modules.
    fs.copySync(tempTarget, path.join(tmpDir, name));
  } catch (e) {
    console.log(`Format scaffold '${target}' error:`, e);
  }
}
