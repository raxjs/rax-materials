import { runApp, IAppConfig } from 'rax-app';

wx.cloud.init();

const appConfig: IAppConfig = {};
runApp(appConfig);
