---
order: 1
---

# Basic

basic usage

```jsx
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import MyComponent from '@rax-materials/detail-edit';

render(<MyComponent />, document.body, { driver: DriverUniversal });
```
