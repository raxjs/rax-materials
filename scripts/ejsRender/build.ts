/* eslint-disable no-await-in-loop */
// render scaffolds ejs templates to temp dir
import generate from './generate';
import config from './config';

async function build() {
  const { targets } = config;

  const keys = Object.keys(targets);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    await generate(key);
  }
}

build();
