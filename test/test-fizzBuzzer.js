// import chai and declare expect variable
const expect = require('chai').expect;

// import function to be tested 
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    
    // test num % 3
    it(`should return fizz if divisible by 3`, function() {
        
        const normalCases = [
            {num: 12, expected: 'fizz'},
            {num: 9, expected: 'fizz'},
            {num: 6, expected: 'fizz'}
        ];

        normalCases.forEach(input => {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.be.equal(input.expected);
        });
    
    });
    // test num % 5
    it(`should return 'buzz' if divisible by 5`, function() {
        const normalCases = [
            {num: 5, expected: 'buzz'},
            {num: 10, expected: 'buzz'},
            {num: 20, expected: 'buzz'},
        ];
        normalCases.forEach(input => {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.be.equal(input.expected);
        })

    });
    // test num % 15
    it(`should return 'fizz-buzz' if divisible by 3 and 5`, function() {
        const normalCases = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 30, expected: 'fizz-buzz'},
            {num: 45, expected: 'fizz-buzz'},
        ];
        normalCases.forEach(input => {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.be.equal(input.expected);
        })

    });
    // test edge case 
    it('should raise an error if args are not numbers', function() {
        badInputs = [
            'a',
            'fifteen',
            'three'
        ];

        badInputs.forEach(input => {
            expect(function() {
                fizzBuzzer(badInput(input));
            }).to.throw(Error);
        });
    });
});