---
sidebar_position: 1
---

# 文字列をパースする

`T.str()`を使って指定した文字列にマッチするパーサーを作成できます。

以下の例では「hello」という文字列にマッチさせています。
```ts
// string.ts
import * as T from 'terrario';

const parser = T.str('hello');
```

マッチさせたい文字列の指定には正規表現も利用できます。  
なお、複雑なパターンを指定するとパフォーマンスに影響を与えることがあるため注意してください。
```ts
// string-regexp.ts
import * as T from 'terrario';

const parser = T.str(/[a-z]{5}/);
```
