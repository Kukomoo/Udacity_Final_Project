import { handleSubmit, initFormHandler, isValidURL } from '../formHandler.js';

describe('Testing the formHandler functionality', () => {
    let mockForm;

    beforeEach(() => {
        mockForm = {
            addEventListener: jest.fn(),
        };

        jest.spyOn(document, 'getElementById').mockImplementation((id) => {
            if (id === 'urlForm') {
                return mockForm;
            }
            if (id === 'name') {
                return { value: 'https://example.com' };
            }
            return null;
        });


        initFormHandler();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('It should call addEventListener on the form', () => {
        expect(mockForm.addEventListener).toHaveBeenCalledWith('submit', expect.any(Function));
    });

    test('It should validate URLs correctly', () => {
        expect(isValidURL('https://example.com')).toBe(true);
        expect(isValidURL('invalid-url')).toBe(false);
    });
});