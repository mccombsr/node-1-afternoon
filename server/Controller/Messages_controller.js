var messages = [];
var id = 0;

//var mc = {
module.exports = {
    create: (req, res) => {
        const{text, time}= req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        console.log('messagesArray',messages)
        const {text} = req.body;
        const updateId = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateId);
        console.log('messageIndex', messageIndex)
        let message = messages[messageIndex];
console.log('----', message)
        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const deleteId = req.params.id;
        messageIndex = messages.findIndex(message => message.id == deleteId);
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);
    }
}

//module.exports = mc;