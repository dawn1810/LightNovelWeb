const NodePersist = require('node-persist');

const storage = NodePersist.create({
	dir: '.temp',
});

const renderIndex = async (req, res) => {
	let result = await storage.getItem('novellist');
	currentURL = req.url;

	res.render('index', {
		headerFile: 'header',
		footerFile: 'footer',
		jsontruyen: result
	});
};

module.exports = {
    renderIndex,
};