const fs = require('fs');
fs.writeFile("message2.txt", "Hello, Native Modules!",  (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});


