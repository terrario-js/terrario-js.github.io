---
sidebar_position: 3
---

# 任意の文字列にマッチさせる

任意の文字とのマッチには`T.char`を利用します。
manyメソッドを組み合わせることで任意の文字列とマッチさせることができます。
```ts
// string.ts
import * as T from 'terrario';

const parser = T.char.many();
```
