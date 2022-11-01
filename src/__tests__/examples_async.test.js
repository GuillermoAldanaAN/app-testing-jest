//callbacks
const asyncCallback = (cb) => {
    setTimeout(() => {
        cb(true);
    },1000);
}
//promises
const asyncPromises = () => new Promise((resolve) => resolve(true));

describe('Async code', () => {
    test('A example of async with callback', (done) => {
        asyncCallback((result) => {
            expect(result).toBe(true);
            done();
        });
    });
    test('A example of async with promises', () => {
        return asyncPromises().then((result) => expect(result).toBe(true));
    });
    test('A example of async await',async () => {
        const result = await asyncPromises();
        expect(result).toBe(true);
    });
})