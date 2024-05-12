import fs from 'fs';


let outPutMessage = '';
const base = 5;
const headerMessage = `
================================
        Table of 5
================================\n
`;

for (let i = 1; i <= 10; i++) {
    outPutMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

outPutMessage = headerMessage + outPutMessage;
console.log(outPutMessage);

const outputPath = 'outputs';

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/table-${ base }.txt`, outPutMessage);
console.log('File created!');
