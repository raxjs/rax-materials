import { render } from 'rax';
import DriverUniversal from 'driver-universal';

export function mount(appInstance, rootEl) {
  return render(appInstance, rootEl, {
    driver: DriverUniversal,
  });
}

export function unmount(appInstance, rootEl) {
  return appInstance._internal.unmountComponent.bind(appInstance._internal);
}
