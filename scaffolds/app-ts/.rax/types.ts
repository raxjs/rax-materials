import {
  RaxElement as FrameworkElement,
  ComponentType as FrameworkComponentType,
  RaxNode as FrameworkNode,
} from 'rax';

import { IStore } from './store/types';

export * from './store/types';

interface IOnTabItemClickParams {
  from: string;
  path: string;
  text: string;
  index: number;
}

export interface IApp {
  rootId?: string;
  mountNode?: HTMLElement;
  addProvider?: ({ children }: { children: FrameworkNode }) => FrameworkElement;
  getInitialData?: () => Promise<any>;
  ErrorBoundaryFallback?: (error: any) => FrameworkComponentType;
  onErrorBoundaryHander?: (error: Error, componentStack: string) => any;
  onLaunch?: () => any;
  onShow?: () => any;
  onHide?: () => any;
  onError?: (error: Error) => any;
  onTabItemClick?: ({ from, path, text, index }: IOnTabItemClickParams) => any;

  [key: string]: any;
}

export interface IAppConfig {
  app?: IApp;
  store?: IStore;
}

declare global {
  interface Window {
    __ICE_SSR_ENABLED__: any;
    __ICE_APP_DATA__: any;
    __ICE_PAGE_PROPS__: any;
  }
}
