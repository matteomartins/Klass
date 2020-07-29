const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 3333
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

try {
    app.use(routes);
}
catch (e) {
    console.log(e)
}

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));