import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it('should transform a string to a number', () => {
    // Arrange
    const value = '1';
    const expectedResult = 1;

    // Act
    const result = transformToNumber(value);

    // Assert
    expect(result).toBeTypeOf('number');
});

it('should yield NaN if an invalid value is provided', () => {
    const value = 'salam';
    const value2 = {};

    const result = transformToNumber(value);
    const result2 = transformToNumber(value2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
});

it('should yield 0 if an empty string is provided', () => {
    const value = '';
    expect(transformToNumber(value)).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
    expect(transformToNumber()).toBeNaN();
});