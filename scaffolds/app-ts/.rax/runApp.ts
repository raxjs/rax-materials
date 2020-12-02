import { createElement, useEffect, Component } from 'rax';
import {
  isMiniApp,
  isWeChatMiniProgram,
  isByteDanceMicroApp,
  isWeb,
} from 'universal-env';
import miniappRenderer from 'miniapp-renderer';
import createShareAPI, { history } from 'create-app-shared';

import raxAppRenderer from 'rax-app-renderer';
import { createWithRouter } from 'create-use-router';
const defaultWithRouter = createWithRouter({ createElement });

import loadRuntimeModules from './loadRuntimeModules';
import loadStaticModules from './loadStaticModules';
import defaultStaticConfig from './staticConfig';

import { setAppConfig } from './appConfig';
import { mount, unmount } from './render';
import ErrorBoundary from './ErrorBoundary';

const {
  createBaseApp,
  withRouter,
  createHistory,
  getHistory,
  emitLifeCycles,
  usePageShow,
  usePageHide,
  withPageLifeCycle,
  pathRedirect,
  registerNativeEventListeners,
  addNativeEventListener,
  removeNativeEventListener,
  getSearchParams,
} = createShareAPI(
  {
    createElement,
    useEffect,
    withRouter: defaultWithRouter,
  },
  loadRuntimeModules
);

export function runApp(appConfig, staticConfig?: any) {
  let renderer;

  renderer = raxAppRenderer;

  if ((isMiniApp || isWeChatMiniProgram || isByteDanceMicroApp) && !isWeb) {
    renderer = miniappRenderer;
  }
  const buildConfig = {};
  renderer(
    {
      appConfig,
      staticConfig: staticConfig || defaultStaticConfig,
      buildConfig,
      setAppConfig,
      createBaseApp,
      createHistory,
      getHistory,
      emitLifeCycles,
      pathRedirect,
      loadStaticModules,
      ErrorBoundary,
    },
    {
      createElement,
      mount,
      unmount,
      Component,
    }
  );
}

// Public API
export {
  // router api
  withRouter,
  history,
  getHistory,
  getSearchParams,
  // LifeCycles api
  usePageShow,
  usePageHide,
  withPageLifeCycle,
  // events api
  registerNativeEventListeners,
  addNativeEventListener,
  removeNativeEventListener,
  ErrorBoundary,
};

// Private API
export default {
  createBaseApp,
  emitLifeCycles,
};
