const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const useRouters = require('./routes/user.route');

app.use('/user', useRouters);

app.get('/', (req, res) => {
    res.send('express server is running');
});

app.all('*', (req, res) => {
    res.send('invalid route');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
