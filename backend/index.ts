const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for cross-origin requests

const port = 5000;

// Simple API endpoint to call another external API
app.get('/api/post', async (req, res) => {
  try {
    const response = await axios.get('https://blog-admin-next.vercel.app/api/post');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from external API:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const response:any = await fetch('https://blog-admin-next.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'no-cors',
      body: JSON.stringify(req),
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    console.error('An error occurred while sending the message', error);
    res.status(500).json({ error: 'An error occurred while sending the message.' });
  }
});


app.post('/api/newsletter', async (req, res) => {
  try {
    const response:any = await fetch('https://blog-admin-next.vercel.app/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'no-cors',
      body: JSON.stringify(req),
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    console.error('An error occurred while Subscription', error);
    res.status(500).json({ error: 'An error occurred while Subscription.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
