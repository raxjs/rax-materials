import { Provide, Func, Inject, Config } from '@midwayjs/decorator';
import { FunctionHandler, FaaSContext, } from '@midwayjs/faas';
import { join } from 'path';

@Provide()
export class IndexHandler implements FunctionHandler {

  @Inject()
  ctx: FaaSContext;

  @Inject()
  baseDir;

  @Config('ssrConfig')
  ssrConfig;

  @Func('assets.handler', { middleware: [ 'fmw:staticFile' ]})
  async render() {
    return `Cannot GET ${this.ctx.request.path}`;
  }
  
  /**
   * 发布为 hsf 时
   * 这个参数是 ginkgo 固定的，入参出参都为字符串
   * @param event
   */
  @Func('index.handler')
  async handler(event: any): Promise<any> {
    // 动态调用 SSR 的构建产物
    return {
      stars: 10000
    };
  }

  @Func('home.handler')
  async homeHandler(event: any): Promise<any> {
    // 动态调用 SSR 的构建产物
    const homeRender = require(join(this.ssrConfig.dir, '/index.js'));
    await homeRender.renderWithContext(this.ctx);
  }
}
