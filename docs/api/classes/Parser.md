# Class: `Parser<T>`

Parser class

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Parser.md#constructor)

### Properties

- [ctx](Parser.md#ctx)
- [name](Parser.md#name)

### Methods

- [\_evalContext](Parser.md#_evalcontext)
- [exec](Parser.md#exec)
- [find](Parser.md#find)
- [findAll](Parser.md#findall)
- [many](Parser.md#many)
- [map](Parser.md#map)
- [option](Parser.md#option)
- [parse](Parser.md#parse)
- [state](Parser.md#state)
- [text](Parser.md#text)

## Constructors

### constructor

• **new Parser**<`T`\>(`opts`)

Parser constructor

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StrictParserOpts`](../modules.md#strictparseropts)<`T`\> |

#### Defined in

[index.ts:68](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L68)

• **new Parser**<`T`\>(`opts`)

Parser constructor

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LazyParserOpts`](../modules.md#lazyparseropts)<`T`\> |

#### Defined in

[index.ts:74](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L74)

## Properties

### ctx

• **ctx**: [`ParserContext`](../modules.md#parsercontext)<`T`\> \| [`LazyContext`](../modules.md#lazycontext)<`T`\>

#### Defined in

[index.ts:61](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L61)

___

### name

• `Optional` **name**: `string`

#### Defined in

[index.ts:60](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L60)

## Methods

### \_evalContext

▸ **_evalContext**(): [`ParserContext`](../modules.md#parsercontext)<`T`\>

Evaluate the lazy context.

#### Returns

[`ParserContext`](../modules.md#parsercontext)<`T`\>

#### Defined in

[index.ts:92](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L92)

___

### exec

▸ **exec**(`input`, `state?`, `offset?`): [`Result`](../modules.md#result)<`T`\>

Execute a child parser in the parser.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `string` | `undefined` |
| `state` | `any` | `{}` |
| `offset` | `number` | `0` |

#### Returns

[`Result`](../modules.md#result)<`T`\>

#### Defined in

[index.ts:109](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L109)

___

### find

▸ **find**(`input`, `state?`): `undefined` \| { `index`: `number` ; `input`: `string` ; `result`: [`Result`](../modules.md#result)<`T`\>  }

Find a pattern from the input string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `state` | `any` |

#### Returns

`undefined` \| { `index`: `number` ; `input`: `string` ; `result`: [`Result`](../modules.md#result)<`T`\>  }

#### Defined in

[index.ts:129](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L129)

___

### findAll

▸ **findAll**(`input`, `state?`): { `index`: `number` ; `input`: `string` ; `result`: [`Result`](../modules.md#result)<`T`\>  }[]

Find all patterns from the input string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `state` | `any` |

#### Returns

{ `index`: `number` ; `input`: `string` ; `result`: [`Result`](../modules.md#result)<`T`\>  }[]

#### Defined in

[index.ts:145](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L145)

___

### many

▸ **many**(`min?`, `max?`): [`Parser`](Parser.md)<`T`[]\>

many

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | `number` |
| `max?` | `number` |

#### Returns

[`Parser`](Parser.md)<`T`[]\>

#### Defined in

[index.ts:193](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L193)

▸ **many**(`opts`): [`Parser`](Parser.md)<`T`[]\>

many

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.max?` | `number` |
| `opts.min?` | `number` |
| `opts.notMatch?` | [`Parser`](Parser.md)<`unknown`\> |

#### Returns

[`Parser`](Parser.md)<`T`[]\>

#### Defined in

[index.ts:199](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L199)

___

### map

▸ **map**<`U`\>(`fn`): [`Parser`](Parser.md)<`U`\>

map

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`value`: `T`) => `U` |

#### Returns

[`Parser`](Parser.md)<`U`\>

#### Defined in

[index.ts:162](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L162)

___

### option

▸ **option**(): [`Parser`](Parser.md)<``null`` \| `T`\>

option

#### Returns

[`Parser`](Parser.md)<``null`` \| `T`\>

#### Defined in

[index.ts:215](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L215)

___

### parse

▸ **parse**(`input`, `state?`): [`Result`](../modules.md#result)<`T`\>

Parse an input string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `state` | `any` |

#### Returns

[`Result`](../modules.md#result)<`T`\>

#### Defined in

[index.ts:119](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L119)

___

### state

▸ **state**(`key`, `value`): [`Parser`](Parser.md)<`T`\>

state

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | (`state`: `any`) => `any` |

#### Returns

[`Parser`](Parser.md)<`T`\>

#### Defined in

[index.ts:227](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L227)

___

### text

▸ **text**(): [`Parser`](Parser.md)<`string`\>

text

#### Returns

[`Parser`](Parser.md)<`string`\>

#### Defined in

[index.ts:177](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L177)
