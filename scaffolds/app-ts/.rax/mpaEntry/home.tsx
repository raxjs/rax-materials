import { render, createElement } from 'rax';
import Component from '/Users/guoda/work/rax/rax-materials/scaffolds/app-ts/src/pages/Home/index';
import DriverUniversal from 'driver-universal';

const isSSR = window.__INITIAL_DATA__ && window.__INITIAL_DATA__.__SSR_ENABLED__;

var comProps = {};

function Entry() {
  return createElement(Component, comProps);
}
const renderApp = async function() {
  let comProps = {};
  // process App.getInitialProps
  if (isSSR && window.__INITIAL_DATA__.pageData !== null) {
    comProps = window.__INITIAL_DATA__.pageData;
  } else if (Component.getInitialProps) {
    const comProps = await Component.getInitialProps();
  }
  render(<Component {...comProps} />, document.getElementById("root"), { driver: DriverUniversal, hydrate: isSSR });
}
renderApp();
