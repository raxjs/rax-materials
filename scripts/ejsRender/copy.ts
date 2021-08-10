import * as fs from 'fs-extra';
import * as path from 'path';

const ignores = ['node_modules', '.rax', '.ice', 'build', 'lib'];

export default function copy(from: string, to: string) {
  const reg = new RegExp(ignores.map((ignore) => path.join(from, ignore)).join('|'));
  fs.copySync(from, to, {
    filter: (src: string) => {
      if (reg.test(src)) {
        return false;
      }
      return true;
    },
  });
}
