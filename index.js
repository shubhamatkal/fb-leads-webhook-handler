require('dotenv').config();
const express = require('express');
const app = express();

const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
const PORT = process.env.PORT || 2000;

app.use(express.json());

// GET /webhook for Facebook verification
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('WEBHOOK_VERIFIED');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// POST /webhook to receive lead data
app.post('/webhook', (req, res) => {
  console.log('Received webhook:', JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 