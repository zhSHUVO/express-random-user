const fs = require('fs');

module.exports.getRandomUser = (req, res) => {
    const userdata = fs.readFileSync('random.json');
    const user = JSON.parse(userdata);
    const randomUser = user[Math.floor(Math.random() * user.length)];
    res.send(randomUser);
};

module.exports.getAllUser = (req, res) => {
    const { limit } = req.query;
    const userdata = fs.readFileSync('random.json');
    const user = JSON.parse(userdata);
    res.send(user.slice(0, limit));
};

module.exports.addRandomUser = (req, res) => {
    const userdata = fs.readFileSync('random.json');
    const user = JSON.parse(userdata);
    const newUser = req.body;
    user.push(newUser);
    const newUserList = JSON.stringify(user);
    fs.writeFileSync('random.json', newUserList);
    console.log(newUser);
    res.send(newUserList);
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
