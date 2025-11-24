const fs = require('fs');
fs.writeFileI("message.tcxt", "Hello, Naive Modules!",  (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});


