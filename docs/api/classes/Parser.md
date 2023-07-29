# Class: `Parser<U>`

Parser class

## Type parameters

| Name |
| :------ |
| `U` |

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

• **new Parser**<`U`\>(`opts`)

Parser constructor

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StrictParserOpts`](../modules.md#strictparseropts)<`U`\> |

#### Defined in

[index.ts:68](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L68)

• **new Parser**<`U`\>(`opts`)

Parser constructor (Lazy parser)

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LazyParserOpts`](../modules.md#lazyparseropts)<`U`\> |

#### Defined in

[index.ts:74](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L74)

## Properties

### ctx

• **ctx**: [`ParserContext`](../modules.md#parsercontext)<`U`\> \| [`LazyContext`](../modules.md#lazycontext)<`U`\>

#### Defined in

[index.ts:61](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L61)

___

### name

• `Optional` **name**: `string`

#### Defined in

[index.ts:60](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L60)

## Methods

### \_evalContext

▸ **_evalContext**(): [`ParserContext`](../modules.md#parsercontext)<`U`\>

Evaluate the lazy context.

#### Returns

[`ParserContext`](../modules.md#parsercontext)<`U`\>

#### Defined in

[index.ts:92](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L92)

___

### exec

▸ **exec**(`input`, `state?`, `offset?`): [`Result`](../modules.md#result)<`U`\>

Execute the parser handler.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `string` | `undefined` |
| `state` | `any` | `{}` |
| `offset` | `number` | `0` |

#### Returns

[`Result`](../modules.md#result)<`U`\>

#### Defined in

[index.ts:109](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L109)

___

### find

▸ **find**(`input`, `state?`): `undefined` \| { `index`: `number` ; `input`: `string` ; `result`: [`Result`](../modules.md#result)<`U`\>  }

Find a pattern from the input string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `state` | `any` |

#### Returns

`undefined` \| { `index`: `number` ; `input`: `string` ; `result`: [`Result`](../modules.md#result)<`U`\>  }

#### Defined in

[index.ts:129](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L129)

___

### findAll

▸ **findAll**(`input`, `state?`): { `index`: `number` ; `input`: `string` ; `result`: [`Result`](../modules.md#result)<`U`\>  }[]

Find all patterns from the input string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `state` | `any` |

#### Returns

{ `index`: `number` ; `input`: `string` ; `result`: [`Result`](../modules.md#result)<`U`\>  }[]

#### Defined in

[index.ts:145](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L145)

___

### many

▸ **many**(`min?`, `max?`): [`Parser`](Parser.md)<`U`[]\>

Create a new parser that tries to apply the parser iteratively.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | `number` |
| `max?` | `number` |

#### Returns

[`Parser`](Parser.md)<`U`[]\>

#### Defined in

[index.ts:195](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L195)

▸ **many**(`opts`): [`Parser`](Parser.md)<`U`[]\>

Create a new parser that tries to apply the parser iteratively.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.max?` | `number` |
| `opts.min?` | `number` |
| `opts.notMatch?` | [`Parser`](Parser.md)<`unknown`\> |

#### Returns

[`Parser`](Parser.md)<`U`[]\>

#### Defined in

[index.ts:201](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L201)

___

### map

▸ **map**<`V`\>(`fn`): [`Parser`](Parser.md)<`V`\>

Create a new parser that wraps the current parser.
The generated parser maps the result of the inner parser and returns it as a result.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`value`: `U`) => `V` |

#### Returns

[`Parser`](Parser.md)<`V`\>

#### Defined in

[index.ts:163](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L163)

___

### option

▸ **option**(): [`Parser`](Parser.md)<``null`` \| `U`\>

Create a new parser that wraps the current parser.
The generated parser returns success regardless of whether the inner parser successfully matched.
If the inner parser fails, a null value is returned.

#### Returns

[`Parser`](Parser.md)<``null`` \| `U`\>

#### Defined in

[index.ts:219](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L219)

___

### parse

▸ **parse**(`input`, `state?`): [`Result`](../modules.md#result)<`U`\>

Parse an input string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `state` | `any` |

#### Returns

[`Result`](../modules.md#result)<`U`\>

#### Defined in

[index.ts:119](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L119)

___

### state

▸ **state**(`key`, `value`): [`Parser`](Parser.md)<`U`\>

Create a new parser that wraps the current parser.
The generated parser will set the value of the state variable from the given set function and
run the inner parser. When the inner parser finishes executing, it restores the value of the
state variable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | (`state`: `any`) => `any` |

#### Returns

[`Parser`](Parser.md)<`U`\>

#### Defined in

[index.ts:234](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L234)

___

### text

▸ **text**(): [`Parser`](Parser.md)<`string`\>

Create a new parser that wraps the current parser.
The generated parser will return the text in the range matched by the inner parser.

#### Returns

[`Parser`](Parser.md)<`string`\>

#### Defined in

[index.ts:179](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L179)
