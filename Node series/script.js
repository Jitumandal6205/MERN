console.log ("Jitu kumar Mandal")

const fs = require('fs');
fs.writeFile("output.txt", "Writing File", (err) => {
    if (err) console.log (" Error Occured");
    else console.log ("File Created Successfully");
})