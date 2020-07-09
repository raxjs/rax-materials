/**
 * Scripts to check unpublished version and run publish
 */
import { join } from 'path';
import { spawnSync } from 'child_process';
import checkPackagePublished from './checkPackagePublished';
import { setPublishedPackages } from './published-info';
import { IPackageInfo, getPackageInfos } from './getPackageInfos';

function publish(pkg: string, version: string, directory: string): void {
  console.log('[PUBLISH]', `${pkg}@${version}`);

  spawnSync('npm', [
    'publish',
    '--access', 'public'
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
  const publishedPackages = [];
  // Publish
  for (let i = 0; i < result.length; i++) {
    const packageInfos: IPackageInfo[] = result[i];
    for (let j = 0; j < packageInfos.length; j++) {
      const { name, directory, localVersion, shouldPublish } = packageInfos[j];
      if (shouldPublish) {
        publishedCount++;
        console.log(`--- ${name}@${localVersion} ---`);
        publish(name, localVersion, directory);
        publishedPackages.push(`${name}:${localVersion}`);
      }
    }
  }
  setPublishedPackages(publishedPackages);
  // Check published packages can be finded.
  checkPackagePublished().then(() => {
    console.log(`[PUBLISH] Complete (count=${publishedCount}).`);
    console.log(`${publishedPackages.join('\n')}`);
  }).catch((e) => {
    console.error(e);
    process.exit(1);
  });
});
