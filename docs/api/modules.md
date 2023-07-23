# Modules
Terrario modules.

## Table of contents

### Classes

- [Parser](classes/Parser.md)

### Type Aliases

- [Failure](modules.md#failure)
- [LazyContext](modules.md#lazycontext)
- [LazyParserOpts](modules.md#lazyparseropts)
- [ParserContext](modules.md#parsercontext)
- [ParserHandler](modules.md#parserhandler)
- [Result](modules.md#result)
- [ResultType](modules.md#resulttype)
- [ResultTypes](modules.md#resulttypes)
- [StrictParserOpts](modules.md#strictparseropts)
- [Success](modules.md#success)

### Variables

- [char](modules.md#char)
- [cr](modules.md#cr)
- [crlf](modules.md#crlf)
- [eof](modules.md#eof)
- [lf](modules.md#lf)
- [lineBegin](modules.md#linebegin)
- [lineEnd](modules.md#lineend)
- [newline](modules.md#newline)
- [sof](modules.md#sof)

### Functions

- [alt](modules.md#alt)
- [cond](modules.md#cond)
- [failure](modules.md#failure-1)
- [language](modules.md#language)
- [lazy](modules.md#lazy)
- [match](modules.md#match)
- [notMatch](modules.md#notmatch)
- [parser](modules.md#parser)
- [seq](modules.md#seq)
- [str](modules.md#str)
- [succeeded](modules.md#succeeded)
- [success](modules.md#success-1)

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

[index.ts:30](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L30)

___

### LazyContext

Ƭ **LazyContext**<`T`\>: () => [`Parser`](classes/Parser.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): [`Parser`](classes/Parser.md)<`T`\>

##### Returns

[`Parser`](classes/Parser.md)<`T`\>

#### Defined in

[index.ts:276](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L276)

___

### LazyParserOpts

Ƭ **LazyParserOpts**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | `undefined` |
| `handler?` | `undefined` |
| `lazy` | [`LazyContext`](modules.md#lazycontext)<`T`\> |
| `name?` | `string` |

#### Defined in

[index.ts:251](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L251)

___

### ParserContext

Ƭ **ParserContext**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children` | [`Parser`](classes/Parser.md)<`any`\>[] |
| `handler` | [`ParserHandler`](modules.md#parserhandler)<`T`\> |

#### Defined in

[index.ts:268](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L268)

___

### ParserHandler

Ƭ **ParserHandler**<`T`\>: (`input`: `string`, `index`: `number`, `children`: [`Parser`](classes/Parser.md)<`any`\>[], `state`: `any`) => [`Result`](modules.md#result)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`input`, `index`, `children`, `state`): [`Result`](modules.md#result)<`T`\>

Parser handler function

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `index` | `number` |
| `children` | [`Parser`](classes/Parser.md)<`any`\>[] |
| `state` | `any` |

##### Returns

[`Result`](modules.md#result)<`T`\>

#### Defined in

[index.ts:263](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L263)

___

### Result

Ƭ **Result**<`T`\>: [`Success`](modules.md#success)<`T`\> \| [`Failure`](modules.md#failure)

Parser result

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[index.ts:52](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L52)

___

### ResultType

Ƭ **ResultType**<`T`\>: `T` extends [`Parser`](classes/Parser.md)<infer R\> ? `R` : `never`

Get result type of Parser.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[index.ts:284](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L284)

___

### ResultTypes

Ƭ **ResultTypes**<`T`\>: `T` extends [infer Head, ...(infer Tail)] ? [[`ResultType`](modules.md#resulttype)<`Head`\>, ...ResultTypes<Tail\>] : []

Get result types of Parsers.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[index.ts:291](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L291)

___

### StrictParserOpts

Ƭ **StrictParserOpts**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | [`Parser`](classes/Parser.md)<`any`\>[] |
| `handler` | [`ParserHandler`](modules.md#parserhandler)<`T`\> |
| `lazy?` | `undefined` |
| `name?` | `string` |

#### Defined in

[index.ts:241](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L241)

___

### Success

Ƭ **Success**<`T`\>: `Object`

Success result type

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `success` | ``true`` |
| `value` | `T` |

#### Defined in

[index.ts:6](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L6)

## Variables

### char

• `Const` **char**: [`Parser`](classes/Parser.md)<`string`\>

char

#### Defined in

[index.ts:545](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L545)

___

### cr

• `Const` **cr**: [`Parser`](classes/Parser.md)<``"\r"``\>

#### Defined in

[index.ts:507](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L507)

___

### crlf

• `Const` **crlf**: [`Parser`](classes/Parser.md)<``"\r\n"``\>

#### Defined in

[index.ts:509](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L509)

___

### eof

• `Const` **eof**: [`Parser`](classes/Parser.md)<``null``\>

eof

#### Defined in

[index.ts:534](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L534)

___

### lf

• `Const` **lf**: [`Parser`](classes/Parser.md)<``"\n"``\>

#### Defined in

[index.ts:508](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L508)

___

### lineBegin

• `Const` **lineBegin**: [`Parser`](classes/Parser.md)<``null``\>

lineBegin

#### Defined in

[index.ts:558](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L558)

___

### lineEnd

• `Const` **lineEnd**: [`Parser`](classes/Parser.md)<``null``\>

lineEnd

#### Defined in

[index.ts:576](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L576)

___

### newline

• `Const` **newline**: [`Parser`](classes/Parser.md)<``"\r"`` \| ``"\n"`` \| ``"\r\n"``\>

newline

#### Defined in

[index.ts:516](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L516)

___

### sof

• `Const` **sof**: [`Parser`](classes/Parser.md)<``null``\>

sof

#### Defined in

[index.ts:523](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L523)

## Functions

### alt

▸ **alt**<`T`\>(`parsers`): [`Parser`](classes/Parser.md)<[`ResultTypes`](modules.md#resulttypes)<`T`\>[`number`]\>

alt

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Parser`](classes/Parser.md)<`unknown`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsers` | [...T[]] |

#### Returns

[`Parser`](classes/Parser.md)<[`ResultTypes`](modules.md#resulttypes)<`T`\>[`number`]\>

#### Defined in

[index.ts:423](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L423)

___

### cond

▸ **cond**(`predicate`): [`Parser`](classes/Parser.md)<``null``\>

cond

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`state`: `any`) => `boolean` |

#### Returns

[`Parser`](classes/Parser.md)<``null``\>

#### Defined in

[index.ts:499](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L499)

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

[index.ts:40](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L40)

___

### language

▸ **language**<`T`\>(`syntaxes`): `T`

language

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `syntaxes` | { [K in string \| number \| symbol]: Function } |

#### Returns

`T`

#### Defined in

[index.ts:587](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L587)

___

### lazy

▸ **lazy**<`T`\>(`fn`, `name?`): [`Parser`](classes/Parser.md)<`T`\>

lazy

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => [`Parser`](classes/Parser.md)<`T`\> |
| `name?` | `string` |

#### Returns

[`Parser`](classes/Parser.md)<`T`\>

#### Defined in

[index.ts:451](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L451)

___

### match

▸ **match**<`T`\>(`parser`): [`Parser`](classes/Parser.md)<`T`\>

match

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`Parser`](classes/Parser.md)<`T`\> |

#### Returns

[`Parser`](classes/Parser.md)<`T`\>

#### Defined in

[index.ts:471](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L471)

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

[index.ts:485](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L485)

___

### parser

▸ **parser**<`T`\>(`handler`, `children?`, `name?`): [`Parser`](classes/Parser.md)<`T`\>

parser

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`ParserHandler`](modules.md#parserhandler)<`T`\> |
| `children?` | [`Parser`](classes/Parser.md)<`any`\>[] |
| `name?` | `string` |

#### Returns

[`Parser`](classes/Parser.md)<`T`\>

#### Defined in

[index.ts:441](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L441)

___

### seq

▸ **seq**<`T`\>(`parsers`): [`Parser`](classes/Parser.md)<[`ResultTypes`](modules.md#resulttypes)<[...T]\>\>

seq

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Parser`](classes/Parser.md)<`any`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsers` | [...T[]] |

#### Returns

[`Parser`](classes/Parser.md)<[`ResultTypes`](modules.md#resulttypes)<[...T]\>\>

#### Defined in

[index.ts:386](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L386)

▸ **seq**<`T`, `U`\>(`parsers`, `select`): `T`[`U`]

seq

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Parser`](classes/Parser.md)<`any`\>[] |
| `U` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsers` | [...T[]] |
| `select` | `U` |

#### Returns

`T`[`U`]

#### Defined in

[index.ts:392](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L392)

___

### str

▸ **str**<`T`\>(`value`): [`Parser`](classes/Parser.md)<`T`\>

str

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Parser`](classes/Parser.md)<`T`\>

#### Defined in

[index.ts:346](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L346)

▸ **str**(`pattern`): [`Parser`](classes/Parser.md)<`string`\>

str

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `RegExp` |

#### Returns

[`Parser`](classes/Parser.md)<`string`\>

#### Defined in

[index.ts:352](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L352)

___

### succeeded

▸ **succeeded**<`T`\>(`value`): [`Parser`](classes/Parser.md)<`T`\>

succeeded

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Parser`](classes/Parser.md)<`T`\>

#### Defined in

[index.ts:460](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L460)

___

### success

▸ **success**<`T`\>(`index`, `value`): [`Success`](modules.md#success)<`T`\>

Make a success result.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `T` |

#### Returns

[`Success`](modules.md#success)<`T`\>

#### Defined in

[index.ts:17](https://github.com/marihachi/terrario/blob/89c406f/src/index.ts#L17)
