const os = require('os');
const user = os.userInfo();


console.log(os.uptime());

const currentos ={

    freemem: os.freemem(),
    name: os.type(),
    totalmem: os.totalmem()

}

console.log(currentos);