// import chai and declare expect variable
const expect = require('chai').expect;

// import function to be tested 
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    

    // test num % 3
    it(`should return fizz if a multiple of 3`, function() {
        
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
    it(`should return 'buzz' if a multiple of  by 5`, function() {
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
    it(`should return 'fizz-buzz' if a multiple of 3 and 5`, function() {
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

    // functions above can be rewritten more succintly
    // for example: 
    // it(`should return 'fizz-buzz' if a multiple of 3 and 5`, function() {
    //     [15, 30, 35].forEach(num => {
    //         const answer = fizzBuzzer(num);
    //         expect(answer).to.be.equal('fizz-buzz');
    //     })
    // });

    // test edge case 
    it('should raise an error if args are not numbers', function() {
        badInputs = [
            'a',
            'fifteen',
            'three',
            function(){},
            true,
            false,
            null,
            undefined
        ];

        badInputs.forEach(input => {
            expect(function() {
                fizzBuzzer(badInput(input));
            }).to.throw(Error);
        });
    });
});