
import { checkForName } from '../nameChecker.js';

describe('Testing the checkForName function', () => {
    let alertMock;

    beforeEach(() => {
        alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    });

    afterEach(() => {
        alertMock.mockRestore();
    });

    test('It should call alert for invalid URLs', () => {
        checkForName('InvalidName');
        expect(alertMock).toHaveBeenCalledWith('Please enter a valid URL!');
    });

    test('It should log valid URLs', () => {
        console.log = jest.fn();
        checkForName('https://example.com');
        expect(console.log).toHaveBeenCalledWith('Valid URL provided:', 'https://example.com');
    });
});
