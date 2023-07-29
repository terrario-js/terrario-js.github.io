---
sidebar_position: 2
---

# パーサーを繰り返し適用する

パーサーを繰り返して適用するにはParserクラスの`many`メソッドを使用します。  
`many`メソッドは、現在のParserインスタンスを使用して新しいパーサーを作成します。

```ts
// many.ts
import * as T from 'terrario';

const parser = T.str('abc').many();
```
まず、`T.str('abc')`でParserクラスのインスタンスを作成しています。  
そのパーサーを元にして、繰り返し適用するパーサーをmanyメソッドで新たに作成しています。  
最終的に、parser変数に代入されるParserインスタンスはmanyメソッドで作成されたものとなります。

## 繰り返し回数の範囲を制限する

繰り返し回数の上限と下限をそれぞれ制限することができます。  
範囲外になった場合、そのパーサーのマッチは失敗します。
```ts
// many-range.ts
import * as T from 'terrario';

const parser = T.str('abc').many(2, 4);
// または
// const parser = T.str('abc').many({ min: 2, max: 4 });
```
