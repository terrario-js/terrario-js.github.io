---
sidebar_position: 6
---

# 状態で処理を分岐する

```ts
T.alt([
  T.where(state => state.flag,
    T.str('a'),
  ),
  T.str('b'),
]).state('flag', () => true);
```
