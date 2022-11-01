import { storage } from '../lib/storage';
import { getUserName, saveUserName } from '../user';
jest.mock('../lib/storage');

describe('Mocks examples', () => {
    
    test('First mock', () => {
        const myMock = jest.fn();
        myMock();
        myMock();
        myMock();
        expect(myMock).toHaveBeenCalledTimes(3);
     
        });
    test('Second mock adding data', () => {
        const myMockSecondary = jest.fn()
        .mockReturnValueOnce(true)
        .mockReturnValueOnce('Hello world')
        .mockReturnValueOnce(6)

        const resultOne = myMockSecondary();
        const resultTwo = myMockSecondary();
        const resultThree = myMockSecondary();

        expect(resultOne).toBe(true);
        expect(resultTwo).toBe('Hello world');
        expect(resultThree).toBe(6);
        });

    test('Third mock', () => {
        const userName = 'Lionel Messi'; 
        saveUserName(userName);
        expect(storage.save).toHaveBeenCalled();
        expect(storage.save).toHaveBeenCalledWith({key: 'userName', value: userName});
        });

    test('Fourth mock', () => {
        const userNameValidate = 'Lionel Messi';
        storage.get.mockReturnValueOnce(userNameValidate)
        const userNameRegistered = getUserName();
        expect(userNameRegistered).toBe(userNameValidate);
        expect(storage.get).toHaveBeenCalledTimes(1);
        expect(storage.get).toHaveBeenCalledWith({key: 'userName'});

        });
})