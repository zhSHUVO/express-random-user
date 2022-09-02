module.exports.getRandomUser = (req, res) => {
    res.send('random user');
};

module.exports.getAllUser = (req, res) => {
    res.send('all users');
};

module.exports.addRandomUser = (req, res) => {
    res.send('random user added');
};

module.exports.updateRandomUser = (req, res) => {
    res.send('random user updated');
};

module.exports.multiUserUpdate = (req, res) => {
    res.send('multiple users info updated');
};

module.exports.deleteRandomUser = (req, res) => {
    res.send('random user deleted');
};
