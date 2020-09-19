import { Provide, Func, Inject } from '@midwayjs/decorator';
import { FunctionHandler, FaaSContext, } from '@midwayjs/faas';

@Provide()
export class IndexHandler implements FunctionHandler {

  @Inject()
  ctx: FaaSContext;

  @Inject()
  baseDir;

  @Func('pages.render', { middleware: [ 'fmw:staticFile' ]})
  async render() {
    return 'Page is not found';
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
}
