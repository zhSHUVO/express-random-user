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
    if (req.body.gender !== undefined) {
        newData.gender = req.body.gender;
    }
    if (req.body.name !== undefined) {
        newData.name = req.body.name;
    }
    if (req.body.contact !== undefined) {
        newData.contact = req.body.contact;
    }
    if (req.body.address !== undefined) {
        newData.address = req.body.address;
    }
    if (req.body.photoUrl !== undefined) {
        newData.photoUrl = req.body.photoUrl;
    }
    const newUserList = JSON.stringify(user);
    fs.writeFileSync('random.json', newUserList);
    res.send(user);
};

module.exports.multiUserUpdate = (req, res) => {
    const bodyData = req.body;
    bodyData.forEach((data) => {
        const { id } = data;
        const newData = user.find((singleUser) => singleUser.id === id);
        if (data.gender !== undefined) {
            newData.gender = data.gender;
        }
        if (data.name !== undefined) {
            newData.name = data.name;
        }
        if (data.contact !== undefined) {
            newData.contact = data.contact;
        }
        if (data.address !== undefined) {
            newData.address = data.address;
        }
        if (data.photoUrl !== undefined) {
            newData.photoUrl = data.photoUrl;
        }
        console.log(newData);
        const newUserList = JSON.stringify(user);
        fs.writeFileSync('random.json', newUserList);
    });
    res.send(user);
};

module.exports.deleteRandomUser = (req, res) => {
    const { id } = req.params;
    const newData = user.filter((singleUser) => singleUser.id !== Number(id));
    fs.writeFileSync('random.json', JSON.stringify(newData));
    res.send(newData);
};
