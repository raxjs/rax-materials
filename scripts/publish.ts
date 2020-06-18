/**
 * Scripts to check unpublished version and run publish
 */
import { join } from 'path';
import { spawnSync } from 'child_process';
import { IPackageInfo, getPackageInfos } from './getPackageInfos';

function publish(pkg: string, version: string, directory: string): void {
  console.log('[PUBLISH]', `${pkg}@${version}`);

  spawnSync('npm', [
    'publish',
    // use default registry
  ], {
    stdio: 'inherit',
    cwd: directory,
  });
}

// Entry
console.log('[PUBLISH] Start:');

Promise.all([
  getPackageInfos(join(__dirname, '../scaffolds')),
  getPackageInfos(join(__dirname, '../blocks'))
]).then((result: IPackageInfo[][]) => {

  let publishedCount = 0;
  // Publish
  for (let i = 0; i < result.length; i++) {
    const packageInfos: IPackageInfo[] = result[i];
    for (let l = 0; l < packageInfos.length; l++) {
      const { name, directory, localVersion, shouldPublish } = packageInfos[l];
      if (shouldPublish) {
        publishedCount++;
        console.log(`--- ${name}@${localVersion} ---`);
        publish(name, localVersion, directory);
      }
    }
  }
  console.log(`[PUBLISH] Complete (count=${publishedCount}).`)
});