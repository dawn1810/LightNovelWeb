const NodePersist = require('node-persist');
const config = require('../config/viewEngine.js')

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

const unpage = (req, res, parentDirectory) => {
	res.sendFile(parentDirectory + '/error/404.html');
}

module.exports = {
    rederIndex,
    unpage
}