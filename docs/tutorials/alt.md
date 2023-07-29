---
sidebar_position: 5
---

# いずれかのパターンにマッチさせる

`T.alt()`を使用します。

`T.alt()`は前から順番にパターンマッチを試行していきます。
マッチするパーサーを見つけた段階で、それを結果として返します。

```ts
// alt.ts
import * as T from 'terrario';

const parser = T.alt([
  T.str('apple'),
  T.str('orange'),
]);
```
