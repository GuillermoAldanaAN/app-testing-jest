describe('Setup and teardown examples', () => {
    beforeAll(() => {
        console.log('BeforeAll');
    });
    beforeEach(() =>{
        console.log('beforeEach');
    });
    afterAll(() => {
        console.log('finish')
    })
    test('example 001', () => {
        expect(true).toBe(true);
    });
    test('example 002', () => {
        expect(true).toBe(true);
    });
});