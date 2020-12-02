export * from './runApp';
export { ErrorBoundary } from './ErrorBoundary';

import { createStore } from '@ice/store';
import store from './store/index';

export { createStore, store };
