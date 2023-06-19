const { error } = require('console');
const server = require('./vip_pro_lib');
const path = require('path');


// server.uploadFileToDrive('C:\\Users\\rurim\\Desktop\\At-The-Beginning-Of-The-Novel-The-Heroine-Begged-The-Retired-Villain-193x278.jpg').catch(console.log(error));
server.downloadFileFromDrive('1bMEm1lUfcZmUh9guPwp-T2tWS2icBD1n','.temp', 'txt')