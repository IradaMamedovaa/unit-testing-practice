import { it, expect } from "vitest";
import { add } from "./math";

it('should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2];
    const expectedResult = numbers.reduce(
        (prevValue, curValue) => prevValue + curValue,
        0
    );

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(expectedResult);
});

it('should yield NaN if a least one invalid number is provided', () => {
    const numbers = ['hehe', 2];
    const result = add(numbers);
    expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
    const numbers = ['1', '2'];
    const expectedResult = numbers.reduce(
        (prevValue, curValue) => prevValue + +curValue,
        0
    );
    expect(add(numbers)).toBe(expectedResult);

});

it('should yield 0 if an empty array is provided', () => {
    const numbers = [];
    expect(add(numbers)).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
    const expectedResult = () => { add() };
    expect(expectedResult).toThrow(); // it is also => /is not iterable/

});

it('should throw an error if a non-array value is passed into the function', () => {
    const expectedResult = () => { add(1) };
    expect(expectedResult).toThrow(/is not iterable/);
}   );