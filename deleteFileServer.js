var fs = require('fs');

fs.unlink('demofile1.html', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});