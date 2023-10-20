const chatbot = require('../chatbot/chatbot');

module.exports = function (app) {
  app.post('/text_query', async (req, res) => {
    // console.log(req);

    const { text, userId } = req.body;
    const resultQuery = await chatbot.textQuery(text, userId);
    // console.log(resultQuery);

    res.send(resultQuery.fulfillmentText);

    // res.send(resultQuery.parameters.fields.severity.stringValue);
    // res.send(resultQuery.parameters.fields.Symptoms.listValue.values[0].stringValue);
    // res.send('This is a response from the Text Query route');
  });
};
