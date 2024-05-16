import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b:base, l:limit, s:showTable } = yarg;

let outPutMessage = '';
const headerMessage = `
================================
        Table of ${ base }
================================\n
`;

for (let i = 1; i <= limit; i++) {
    outPutMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

outPutMessage = headerMessage + outPutMessage;

if ( showTable ) console.log(outPutMessage);

const outputPath = 'outputs';

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/table-${ base }.txt`, outPutMessage);
console.log('File created!');
