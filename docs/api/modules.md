---
sidebar_position: 1
---

# Modules

## Type Aliases

### Failure

Ƭ **Failure**: `Object`

Failure result type

#### Type declaration

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `success` | ``false`` |

#### Defined in

[index.ts:30](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L30)

___

### LazyContext

Ƭ **LazyContext**<`U`\>: () => [`Parser`](classes/Parser.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Type declaration

▸ (): [`Parser`](classes/Parser.md)<`U`\>

##### Returns

[`Parser`](classes/Parser.md)<`U`\>

#### Defined in

[index.ts:283](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L283)

___

### LazyParserOpts

Ƭ **LazyParserOpts**<`U`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | `undefined` |
| `handler?` | `undefined` |
| `lazy` | [`LazyContext`](modules.md#lazycontext)<`U`\> |
| `name?` | `string` |

#### Defined in

[index.ts:258](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L258)

___

### ParserContext

Ƭ **ParserContext**<`U`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children` | [`Parser`](classes/Parser.md)<`any`\>[] |
| `handler` | [`ParserHandler`](modules.md#parserhandler)<`U`\> |

#### Defined in

[index.ts:275](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L275)

___

### ParserHandler

Ƭ **ParserHandler**<`U`\>: (`input`: `string`, `index`: `number`, `children`: [`Parser`](classes/Parser.md)<`any`\>[], `state`: `any`) => [`Result`](modules.md#result)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Type declaration

▸ (`input`, `index`, `children`, `state`): [`Result`](modules.md#result)<`U`\>

Type of parser handler

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `index` | `number` |
| `children` | [`Parser`](classes/Parser.md)<`any`\>[] |
| `state` | `any` |

##### Returns

[`Result`](modules.md#result)<`U`\>

#### Defined in

[index.ts:270](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L270)

___

### Result

Ƭ **Result**<`U`\>: [`Success`](modules.md#success)<`U`\> \| [`Failure`](modules.md#failure)

Parser result

#### Type parameters

| Name |
| :------ |
| `U` |

#### Defined in

[index.ts:52](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L52)

___

### ResultType

Ƭ **ResultType**<`U`\>: `U` extends [`Parser`](classes/Parser.md)<infer R\> ? `R` : `never`

Get result type of Parser.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Defined in

[index.ts:291](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L291)

___

### ResultTypes

Ƭ **ResultTypes**<`U`\>: `U` extends [infer Head, ...(infer Tail)] ? [[`ResultType`](modules.md#resulttype)<`Head`\>, ...ResultTypes<Tail\>] : []

Get result types of Parsers.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Defined in

[index.ts:298](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L298)

___

### StrictParserOpts

Ƭ **StrictParserOpts**<`U`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | [`Parser`](classes/Parser.md)<`any`\>[] |
| `handler` | [`ParserHandler`](modules.md#parserhandler)<`U`\> |
| `lazy?` | `undefined` |
| `name?` | `string` |

#### Defined in

[index.ts:248](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L248)

___

### Success

Ƭ **Success**<`U`\>: `Object`

Success result type

#### Type parameters

| Name |
| :------ |
| `U` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `success` | ``true`` |
| `value` | `U` |

#### Defined in

[index.ts:6](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L6)

## Variables

### char

• `Const` **char**: [`Parser`](classes/Parser.md)<`string`\>

any char

#### Defined in

[index.ts:553](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L553)

___

### cr

• `Const` **cr**: [`Parser`](classes/Parser.md)<``"\r"``\>

#### Defined in

[index.ts:515](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L515)

___

### crlf

• `Const` **crlf**: [`Parser`](classes/Parser.md)<``"\r\n"``\>

#### Defined in

[index.ts:517](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L517)

___

### eof

• `Const` **eof**: [`Parser`](classes/Parser.md)<``null``\>

Match the end of the input string.

#### Defined in

[index.ts:542](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L542)

___

### lf

• `Const` **lf**: [`Parser`](classes/Parser.md)<``"\n"``\>

#### Defined in

[index.ts:516](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L516)

___

### lineBegin

• `Const` **lineBegin**: [`Parser`](classes/Parser.md)<``null``\>

Match lineBegin

#### Defined in

[index.ts:566](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L566)

___

### lineEnd

• `Const` **lineEnd**: [`Parser`](classes/Parser.md)<``null``\>

Match lineEnd

#### Defined in

[index.ts:584](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L584)

___

### newline

• `Const` **newline**: [`Parser`](classes/Parser.md)<``"\r"`` \| ``"\n"`` \| ``"\r\n"``\>

newline

#### Defined in

[index.ts:524](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L524)

___

### sof

• `Const` **sof**: [`Parser`](classes/Parser.md)<``null``\>

Match the begin of the input string.

#### Defined in

[index.ts:531](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L531)

## Functions

### alt

▸ **alt**<`U`\>(`parsers`): [`Parser`](classes/Parser.md)<[`ResultTypes`](modules.md#resulttypes)<`U`\>[`number`]\>

alt

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`Parser`](classes/Parser.md)<`unknown`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsers` | [...U[]] |

#### Returns

[`Parser`](classes/Parser.md)<[`ResultTypes`](modules.md#resulttypes)<`U`\>[`number`]\>

#### Defined in

[index.ts:431](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L431)

___

### failure

▸ **failure**(`index`): [`Failure`](modules.md#failure)

Make a failure result.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Failure`](modules.md#failure)

#### Defined in

[index.ts:40](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L40)

___

### language

▸ **language**<`U`\>(`syntaxes`): `U`

Create a language

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `syntaxes` | { [K in string \| number \| symbol]: Function } |

#### Returns

`U`

#### Defined in

[index.ts:595](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L595)

___

### lazy

▸ **lazy**<`U`\>(`fn`, `name?`): [`Parser`](classes/Parser.md)<`U`\>

Create a lazy parser.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => [`Parser`](classes/Parser.md)<`U`\> |
| `name?` | `string` |

#### Returns

[`Parser`](classes/Parser.md)<`U`\>

#### Defined in

[index.ts:459](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L459)

___

### match

▸ **match**<`U`\>(`parser`): [`Parser`](classes/Parser.md)<`U`\>

match

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`Parser`](classes/Parser.md)<`U`\> |

#### Returns

[`Parser`](classes/Parser.md)<`U`\>

#### Defined in

[index.ts:479](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L479)

___

### notMatch

▸ **notMatch**(`parser`): [`Parser`](classes/Parser.md)<``null``\>

notMatch

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`Parser`](classes/Parser.md)<`unknown`\> |

#### Returns

[`Parser`](classes/Parser.md)<``null``\>

#### Defined in

[index.ts:493](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L493)

___

### parser

▸ **parser**<`U`\>(`handler`, `children?`, `name?`): [`Parser`](classes/Parser.md)<`U`\>

Create a custom parser.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`ParserHandler`](modules.md#parserhandler)<`U`\> |
| `children?` | [`Parser`](classes/Parser.md)<`any`\>[] |
| `name?` | `string` |

#### Returns

[`Parser`](classes/Parser.md)<`U`\>

#### Defined in

[index.ts:449](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L449)

___

### seq

▸ **seq**<`U`\>(`parsers`): [`Parser`](classes/Parser.md)<[`ResultTypes`](modules.md#resulttypes)<[...U]\>\>

Create a new parser that sequentially applies an array of parser.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`Parser`](classes/Parser.md)<`any`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsers` | [...U[]] |

#### Returns

[`Parser`](classes/Parser.md)<[`ResultTypes`](modules.md#resulttypes)<[...U]\>\>

#### Defined in

[index.ts:393](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L393)

▸ **seq**<`U`, `V`\>(`parsers`, `select`): `U`[`V`]

Create a new parser that sequentially applies an array of parser.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`Parser`](classes/Parser.md)<`any`\>[] |
| `V` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parsers` | [...U[]] | - |
| `select` | `V` | The index of the data returned in the result. |

#### Returns

`U`[`V`]

#### Defined in

[index.ts:400](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L400)

___

### str

▸ **str**<`U`\>(`value`): [`Parser`](classes/Parser.md)<`U`\>

Create a new parser that matches the given string.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `U` |

#### Returns

[`Parser`](classes/Parser.md)<`U`\>

#### Defined in

[index.ts:353](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L353)

▸ **str**(`pattern`): [`Parser`](classes/Parser.md)<`string`\>

Create a new parser that matches the given regular expression.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `RegExp` |

#### Returns

[`Parser`](classes/Parser.md)<`string`\>

#### Defined in

[index.ts:359](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L359)

___

### succeeded

▸ **succeeded**<`U`\>(`value`): [`Parser`](classes/Parser.md)<`U`\>

Create a new parser that already succeeds.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `U` |

#### Returns

[`Parser`](classes/Parser.md)<`U`\>

#### Defined in

[index.ts:468](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L468)

___

### success

▸ **success**<`U`\>(`index`, `value`): [`Success`](modules.md#success)<`U`\>

Make a success result.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `U` |

#### Returns

[`Success`](modules.md#success)<`U`\>

#### Defined in

[index.ts:17](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L17)

___

### where

▸ **where**<`U`\>(`condition`, `parser`): [`Parser`](classes/Parser.md)<`U`\>

where

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | (`state`: `any`) => `boolean` |
| `parser` | [`Parser`](classes/Parser.md)<`U`\> |

#### Returns

[`Parser`](classes/Parser.md)<`U`\>

#### Defined in

[index.ts:507](https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L507)
