import { ServerApp } from './presentation/server-app';

describe('App', () => {

    test('should call Server.run with the correct parameters', async() => {

        const mockServerRun = jest.fn();
        ServerApp.run = mockServerRun;

        process.argv = ['node', 'src/app.ts', '-b', '5', '-l', '10', '-s', '-n', 'test', '-d', 'test'];

        await import('./app');

        expect( mockServerRun ).toHaveBeenCalledWith({
            base: 5,
            limit: 10,
            showTable: true,
            fileName: 'test',
            fileDestination: 'test'
        })

    });

});