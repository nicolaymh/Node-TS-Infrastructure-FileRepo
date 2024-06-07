import { ServerApp } from './server-app';
import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

describe('Server App', () => {

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        fileDestination: 'test-destination',
        fileName: 'test-filename'
    };

    beforeEach(() => {

        jest.clearAllMocks();

    });


    test('should create ServerApp instance', () => {

        const serverApp = new ServerApp();

        expect( serverApp ).toBeInstanceOf( ServerApp );
        expect( typeof ServerApp.run ).toBe('function');

    });

    // This is a integration test.
    test('should run ServerApp with options', () => {

        const logSpy = jest.spyOn( console, 'log' );
        const CreateTableSpy = jest.spyOn( CreateTable.prototype, 'execute' );
        const SaveFileSpy = jest.spyOn( SaveFile.prototype, 'execute' );

        ServerApp.run( options );

        expect( logSpy ).toHaveBeenCalledTimes(2);
        expect( logSpy ).toHaveBeenCalledWith('Server is running...');
        expect( logSpy ).toHaveBeenCalledWith('File was created!');


        expect( CreateTableSpy ).toHaveBeenCalledTimes(1);
        expect( CreateTableSpy ).toHaveBeenCalledWith({
            base: options.base,
            limit: options.limit
        });

        expect( SaveFileSpy ).toHaveBeenCalledTimes(1);
        expect( SaveFileSpy ).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileDestination: options.fileDestination,
            fileName: options.fileName
        });
    });

    test('should run with custom values mocked', () => {

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createTableMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(false);

        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createTableMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run( options );

        expect( logMock ).toHaveBeenCalledWith('Server is running...');
        expect( createTableMock ).toHaveBeenCalledWith({
            "base": options.base,
            "limit": options.limit
        });
        expect( saveFileMock ).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2',
            fileDestination: options.fileDestination,
            fileName: options.fileName
        });
        // expect( logMock ).toHaveBeenCalledWith('File was created!');
        expect( logErrorMock ).not.toHaveBeenCalled();

    });

    test('should show the table if showTable is true', () => {

        const newOptions = { ...options, showTable: true };

        const mockCreateTable = jest.fn().mockReturnValue('2 x 5 = 10');
        const logMock = jest.fn();

        CreateTable.prototype.execute = mockCreateTable;
        console.log = logMock;

        ServerApp.run( newOptions );

        expect( mockCreateTable ).toHaveBeenCalledWith({
            base: newOptions.base,
            limit: newOptions.limit
        })

        expect( logMock ).toHaveBeenCalledWith('2 x 5 = 10');

    });

});