const path = require('path');
const Max = require('max-api');


Max.post(`Loaded the ${path.basename(__filename)} script`);




const io = require('socket.io-client');



var socket = io("https://sms-to-max.glitch.me/");


socket.on('sms', (data)=>{
	Max.outlet(data);
});

