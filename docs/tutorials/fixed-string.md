---
sidebar_position: 1
---

# 特定の文字列にマッチさせる

`T.token()`を使って指定した文字列にマッチするパーサーを作成できます。

以下の例では「hello」という文字列にマッチさせています。
```ts
// string.ts
import * as T from 'terrario';

const parser = T.token('hello');
```

マッチさせたい文字列の指定には正規表現も利用できます。  
なお、複雑なパターンを指定するとパフォーマンスに影響を与えることがあるため注意してください。
```ts
// string-regexp.ts
import * as T from 'terrario';

const parser = T.token(/[a-z]{5}/);
```
