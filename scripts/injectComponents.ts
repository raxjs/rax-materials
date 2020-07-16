import * as fse from 'fs-extra';
import * as path from 'path';
import { getLatestVersion } from 'ice-npm-utils';

export default async function injectComponents() {
  try {
    const components = fse.readJsonSync(path.join(__dirname, './components.json'));
    for (let i = 0, l = components.length; i < l; i++) {
      const component = components[i];
      if (
        component.source && component.source.type === 'npm' &&
        // Version information is not set
        component.source.npm && !component.source.version
      ) {
        component.source.version = await getLatestVersion(component.source.npm);
      }
    }
    // Update build/materials.json
    const materialsPath = path.join(__dirname, '../build/materials.json');
    const materials = fse.readJsonSync(materialsPath);
    if (Array.isArray(materials.components)) {
      materials.components = materials.components.concat(components);
    } else {
      materials.components = components;
    }
    fse.writeJsonSync(materialsPath, materials, { spaces: '\t' });
  } catch (e) {
    console.error('Inject components to build/materials.json failed!');
    throw new Error(e);
  }
}
