const { error } = require('console');
const server = require('./vip_pro_lib');
const path = require('path');


// server.uploadFileToDrive('C:\\Users\\rurim\\Desktop\\test.txt').catch(console.log(error));
server.downloadFileFromDrive('1bMEm1lUfcZmUh9guPwp-T2tWS2icBD1n','.savefile')