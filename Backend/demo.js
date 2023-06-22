// const { error } = require('console');
// const server = require('./vip_pro_lib');
// const path = require('path');


// // const a = await server.uploadFileToDrive('C:\\Users\\rurim\\Desktop\\At-The-Beginning-Of-The-Novel-The-Heroine-Begged-The-Retired-Villain-193x278.jpg').catch(console.log(error));
// server.downloadFileFromDrive('1bMEm1lUfcZmUh9guPwp-T2tWS2icBD1n','.temp', 'txt')
const dgram = require('dgram');

const client = dgram.createSocket('udp4');
const message = Buffer.alloc(48, 0);
message[0] = 0x1b;

client.send(message, 0, message.length, 123, '3.asia.pool.ntp.org', (error, bytes) => {
    if (error) {
        console.error(error);
        client.close();
        return;
    }
    client.on('message', (msg, rinfo) => {
        const timeStamp = msg.readUInt32BE(32);
        const epoch = timeStamp - 2208988800;
        const date = new Date(epoch * 1000);
        client.close();
        console.log(date); // In ra đối tượng Date() đại diện cho thời gian hiện tại của máy chủ NTP
    });
});