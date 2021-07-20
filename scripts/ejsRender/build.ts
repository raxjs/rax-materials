/* eslint-disable no-await-in-loop */
// render scaffolds ejs templates to temp dir
import generate from './generate';
import { IConfig } from './interface';
import * as config from '../../ejsRender.config';

async function build() {
  const { scaffolds } = config as IConfig;

  for (let i = 0; i < scaffolds.length; i++) {
    await generate(scaffolds[i]);
  }
}

build();
