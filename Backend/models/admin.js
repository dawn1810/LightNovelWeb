const renderAdmin = async (req, res) => {
	res.render('admin-index', {
		headerFile: 'header',
		footerFile: 'footer',
	});
};

const renderAccountmanager = async (req, res) => {
	res.render('admin-index', {
		headerFile: 'header',
		footerFile: 'footer',
	});
};

const renderAuhtormanager = async (req, res) => {
	res.render('admin-index', {
		headerFile: 'header',
		footerFile: 'footer',
	});
};


module.exports = {
    renderAdmin,
	renderAccountmanager,
	renderAuhtormanager,
}