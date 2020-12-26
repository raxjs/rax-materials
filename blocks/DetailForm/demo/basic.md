---
order: 1
---

# Basic

basic usage

```jsx
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import MyComponent from 'detail-form';

render(<MyComponent />, document.body, { driver: DriverUniversal });
```
