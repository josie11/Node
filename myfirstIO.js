var fs = require('fs');

function printLinesNum(filePath) {
  fileStr = fs.readFileSync(filePath).toString();
  console.log(fileStr.split('\n').length - 1);
}

printLinesNum(process.argv[2]);
