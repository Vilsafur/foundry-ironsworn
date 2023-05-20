/* eslint-disable @typescript-eslint/no-namespace */

declare global {
	namespace foundry {
		namespace data {
			namespace fields {
				export class NumberField<
						T extends number = number,
						TOptions extends NumberField.Options<T> = NumberField.Options<T>
					>
					extends DataField<T, TOptions>
					implements Omit<NumberField.Options<T>, 'validate'>
				{
					min: T | undefined
					max: T | undefined
					step: number | undefined
					integer: boolean
					positive: boolean
					choices: DataField.Choices<T>

					static override _defaults: NumberField.Options
				}
				export namespace NumberField {
					export interface Options<T extends number = number>
						extends DataField.Options<T> {
						/**
						 * A minimum allowed value
						 */
						min: T | undefined
						/**
						 * A maximum allowed value
						 */
						max: T | undefined
						/**
						 * A permitted step size
						 */
						step: number | undefined
						/**
						 * Must the number be an integer?
						 * @default false
						 */
						integer: boolean
						/**
						 * Must the number be positive?
						 * @default false
						 */
						positive: boolean
						/**
						 * An array of values or an object of values/labels which represent allowed choices for the field. A function may be provided which dynamically returns the array of choices.
						 */
						choices: DataField.Choices<T>
					}
				}
				/**
				 * A special [NumberField]{@link NumberField} which represents an angle of rotation in degrees between 0 and 360.
				 */
				// @ts-expect-error
				export class AngleField
					extends NumberField<number, AngleField.Options>
					implements AngleField.Options
				{
					base: number
				}
				export namespace AngleField {
					export interface Options extends NumberField.Options<number> {
						/** @default true */
						required: NumberField.Options['required']
						/** @default false */
						nullable: NumberField.Options['nullable']
						/** @default 0 */
						initial: NumberField.Options['initial']
						/**
						 * Whether the base angle should be treated as 360 or as 0
						 * @default 0 */
						base: number
						/** @default 0 */
						min: NumberField.Options['min']
						/** @default 360 */
						max: NumberField.Options['max']
						/** @default 'is not a number between 0 and 360' */
						validationError: NumberField.Options['validationError']
					}
				}
				/**
				 * A special [NumberField]{@link NumberField} represents a number between 0 and 1.
				 */
				// @ts-expect-error
				export class AlphaField
					extends NumberField<number, AlphaField.Options>
					implements AlphaField.Options {}
				export namespace AlphaField {
					export interface Options extends NumberField.Options {
						/** @default true */
						required: NumberField.Options['required']
						/** @default false */
						nullable: NumberField.Options['nullable']
						/** @default 1 */
						initial: NumberField.Options['initial']
						/** @default 0 */
						min: NumberField.Options['min']
						/** @default 1 */
						max: NumberField.Options['max']
						/** @default 'is not a number between 0 and 1' */
						validationError: NumberField.Options['validationError']
					}
				}
				/**
				 * A subclass of {@link NumberField} which is used for storing integer sort keys.
				 */
				// @ts-expect-error
				export class IntegerSortField
					extends NumberField
					implements IntegerSortField.Options {}
				export namespace IntegerSortField {
					export interface Options extends NumberField.Options {
						/** @default true */
						required: NumberField.Options['required']
						/** @default false */
						nullable: NumberField.Options['nullable']
						/** @default true */
						integer: NumberField.Options['integer']
						/** @default 0 */
						initial: NumberField.Options['initial']
						/** @default 'FOLDER.DocumentSort' */
						label: NumberField.Options['label']
						/** @default 'FOLDER.DocumentSortHint' */
						hint: NumberField.Options['hint']
					}
				}
			}
		}
	}
}

export default foundry.data.fields
