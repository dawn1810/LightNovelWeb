const NodePersist = require('node-persist');
const path = require("path");

const storage = NodePersist.create({
	dir: '.temp',
});

const rederIndex = async (req, res) => {
    let result = await storage.getItem('novellist');
    currentURL = req.url;

    res.render('index', {
        headerFile: 'header',
        footerFile: 'footer',
        jsontruyen: result
    });
}

const parentDirectory = path.resolve(__dirname, "..", "..");
const unpage = (req, res) => {
	res.sendFile(parentDirectory+'/error/404.html');
}

const blockpage = (req, res) => {
	res.sendFile(parentDirectory + '/error/403.html');
}
module.exports = {
    rederIndex,
    unpage,
    blockpage
}