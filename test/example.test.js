// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';



const test = QUnit.test;

test('it should return 0 when given two identical values', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return -1 when the guessed number is lower value than the correct number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(4, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return 1 when the guessed number is higher value than the correct number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(6, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
