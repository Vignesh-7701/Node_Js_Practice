const os = require('os');

console.log(os.platform());   //OS Platform
console.log(os.arch());       //CPU Architecture

console.log(os.cpus().length); //CPU Cores

console.log(os.freemem()); //Free Momory
console.log(os.totalmem());

console.log(os.homedir());

console.log(os.uptime(), "seconds");