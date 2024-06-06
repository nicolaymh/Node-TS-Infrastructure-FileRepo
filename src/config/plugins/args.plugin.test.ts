// import { yarg } from './args.plugin';
import { checkBase, getYargsInstance } from './args.plugin';

const runCommand = (args: string[]) => {
    try {
        return getYargsInstance(['node', 'test', ...args]);
    } catch (error) {
        throw error;
    }
}

describe('Test args.plugin.ts', () => {
    const originalArgv = process.argv;
    let consoleErrorSpy: jest.SpyInstance;

    beforeEach(() => {
        process.argv = [...originalArgv];
        jest.resetModules();
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleErrorSpy.mockRestore();
    });

    test('should return default values', () => {
        const argv = runCommand(['-b', '5']);
        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs',
        }));
    });

    test('should return configuration with custom values', () => {
        const argv = runCommand(['-b', '10', '-l', '20', '-s', 'true', '-n', 'table', '-d', 'files']);
        expect(argv).toEqual(expect.objectContaining({
            b: 10,
            l: 20,
            s: true,
            n: 'table',
            d: 'files',
        }));
    });

    test('should return true if the base is greater than or equal to 1', () => {
        const testCheckBaseWith1 = checkBase({ b: 1 });
        const testCheckBaseWith10 = checkBase({ b: 10 });
        const testCheckBaseWith50 = checkBase({ b: 50 });

        expect(testCheckBaseWith1).toBe(true);
        expect(testCheckBaseWith10).toBe(true);
        expect(testCheckBaseWith50).toBe(true);
    });

    test('should throw error if the base is less than 1 using checkBase', () => {
        expect(() => checkBase({ b: 0 })).toThrow('The base must be greater than 0');
    });

    test('should throw error if the base is less than 1 using yargs', () => {
        expect(() => runCommand(['-b', '0'])).toThrow('The base must be greater than 0');
    });
});
