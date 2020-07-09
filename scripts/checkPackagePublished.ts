import { getLatestVersion } from 'ice-npm-utils';
import { getPublishedPackages } from './published-info';

// Check published packages can be finded.
export default function checkPackagePublished() {
  const publishedPackages: string[] = getPublishedPackages();

  const timeout = 10000;
  const maxDetectTimes = 18; // wait 3 minutes
  return Promise.all(publishedPackages.map((publishedPackage) => {
    return new Promise((resolve, retject) => {

      const info = publishedPackage.split(':');
      // Example: @iceworks/project-service:0.1.8
      const name = info[0];
      const version = info[1];

      let times = 0;
      const timer = setInterval(() => {
        if (times++ > maxDetectTimes) {
          // Exit if detect times over maxDetectTimes.
          clearInterval(timer);
          retject(new Error(`${name}@${version} publish failed! Please try again.`));
        } else {
          getLatestVersion(name).then((latestVersion) => {
            if (version === latestVersion) {
              // Can be installed.
              clearInterval(timer);
              resolve();
            }
          }).catch(() => {
            // ignore
          })
        }
      }, timeout);
    })
  }));
}