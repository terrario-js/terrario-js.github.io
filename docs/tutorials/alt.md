---
sidebar_position: 3
---

# いずれかのパターンにマッチするパーサーを作成する

`T.alt()`を使用します。

```ts
// alt.ts
import * as T from 'terrario';

const parser = T.alt([
  T.str('apple'),
  T.str('orange'),
]);
```
