const fs = require('fs');

const userData = fs.readFileSync('random.json');
const user = JSON.parse(userData);

module.exports.getRandomUser = (req, res) => {
    const randomUser = user[Math.floor(Math.random() * user.length)];
    res.send(randomUser);
};

module.exports.getAllUser = (req, res) => {
    const { limit } = req.query;
    res.send(user.slice(0, limit));
};

module.exports.addRandomUser = (req, res) => {
    const newUser = req.body;
    user.push(newUser);
    const newUserList = JSON.stringify(user);
    fs.writeFileSync('random.json', newUserList);
    console.log(newUser);
    res.send(newUserList);
};

module.exports.updateRandomUser = (req, res) => {
    const { id } = req.params;
    const newData = user.find((singleUser) => singleUser.id === Number(id));
    console.log(newData);
    newData.name = req.body.name;
    const newUserList = JSON.stringify(user);
    fs.writeFileSync('random.json', newUserList);
    res.send(user);
};

module.exports.multiUserUpdate = (req, res) => {
    res.send('multiple users info updated');
};

module.exports.deleteRandomUser = (req, res) => {
    res.send('random user deleted');
};
