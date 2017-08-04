# no-zone.js
No Zone.js allows you to use zone.js API without actually using it. (recommended for advanced use cases only)


```bash
npm install @onespeed/no-zone.js
```

```typescript
import '@onespeed/no-zone.js';
```

Example
```typescript
// ... in your main.js file
import '@onespeed/no-zone.js';

// ... in your components
import {
  // ...
  ChangeDetectorRef
} from '@angular/core';
// ...
  constructor(public changeDetector: ChangeDetectorRef) {
  }

// ...
  add() {
    // ...
    this.changeDetector.detectChanges();
  }
// ...

```


___

enjoy — **OneSpeed**

<br><br>

[![OneSpeed](https://user-images.githubusercontent.com/1016365/28739734-462f5210-73b2-11e7-92f7-2aabe05cfefa.png  "OneSpeed")](https://onespeed.io)
## [OneSpeed](https://onespeed.io)
> Our experience is vast with OneSpeed successfully creating and delivering solutions for companies like Bloomberg, American Airlines, and IBM.
> We will tailor our solutions to fit your needs. Web App Development Services, Mobile App Services, Corporate Training contact us at Patrick@OneSpeed.io

___
