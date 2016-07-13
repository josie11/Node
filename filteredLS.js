var fs = require('fs');
var path = require('path');

function filterFiles(filePath, ext) {
  fs.readdir(filePath, function(err, list) {
    for(var file of list) {
      if(path.extname(file).includes(ext)) console.log(file);
    }
  });
}

filterFiles(process.argv[2], process.argv[3]);
