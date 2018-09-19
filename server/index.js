const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./Controller/Messages_controller');


const app = express();

app.use(bodyParser.json());
app.use(express.static(`./../public/build`))

const messageBaseUrl = '/api/messages';
app.post(`${messageBaseUrl}`, mc.create) 
app.get(`${messageBaseUrl}`, mc.read)
app.put(`${messageBaseUrl}/:id`, mc.update)
app.delete(`${messageBaseUrl}/:id`, mc.delete)





const port = 3001;
app.listen(port, () => {
    console.log(`Welcome to port ${port}`);
})
