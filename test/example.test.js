// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { addTwoNumbers, difTwoNumbers, multTwoNumbers, divTwoNumbers} from '../MathUtils.js';

const test = QUnit.test;

test('addTwonumbers should return 20 if passed 15 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 20;
    const num1 = 15;
    const num2 = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addTwoNumbers(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('addTwonumbers should return 6 if passed 2 and 4', (expect) => {

    const expected = 6;
    const num1 = 2;
    const num2 = 4;
    
    const actual = addTwoNumbers(num1, num2);

    expect.equal(actual, expected);
});

test('difTwonumbers should return 6 if passed 30 and 24', (expect) => {

    const expected = 6;
    const num1 = 30;
    const num2 = 24;
    
    const actual = difTwoNumbers(num1, num2);

    expect.equal(actual, expected);
});

test('difTwonumbers should return 11130 if passed 12257 and 1127', (expect) => {

    const expected = 11130;
    const num1 = 12257;
    const num2 = 1127;
    
    const actual = difTwoNumbers(num1, num2);

    expect.equal(actual, expected);
});

test('multTwonumbers should return 55 if passed 5 and 11', (expect) => {

    const expected = 55;
    const num1 = 5;
    const num2 = 11;
    
    const actual = multTwoNumbers(num1, num2);

    expect.equal(actual, expected);
});

test('multTwonumbers should return 369 if passed 3 and 123', (expect) => {

    const expected = 369;
    const num1 = 3;
    const num2 = 123;
    
    const actual = multTwoNumbers(num1, num2);

    expect.equal(actual, expected);
});

test('divTwonumbers should return 55 if passed 110 and 2', (expect) => {

    const expected = 55;
    const num1 = 110;
    const num2 = 2;
    
    const actual = divTwoNumbers(num1, num2);

    expect.equal(actual, expected);
});

test('divTwonumbers should return 45 if passed 135 and 3', (expect) => {

    const expected = 45;
    const num1 = 135;
    const num2 = 3;
    
    const actual = divTwoNumbers(num1, num2);

    expect.equal(actual, expected);
});