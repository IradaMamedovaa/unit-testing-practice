import { it, expect } from "vitest";
import { add } from "./math";

it('should add number values in array', () => {
    // Arrange
    const numbers = [1, 2, 3, 4, 5];
    const expectedResult = numbers.reduce((acc, number) => acc + number, 0);
    // Act
    const result = add(numbers);
    // Assert
    expect(result).toBe(expectedResult);
});
