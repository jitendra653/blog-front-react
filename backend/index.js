const express = require('express');
const axios = require('axios');
// const cors = require('cors');
const app = express();
const port = 5000;

// app.use(cors());
app.use(express.json());

app.get('/api/posts', async (req, res) => {
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
    const response = await axios.post('https://blog-admin-next.vercel.app/api/contact', req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while sending the message.' });
  }
});

app.post('/api/newsletter', async (req, res) => {
  try {
    const response = await axios.post('https://blog-admin-next.vercel.app/api/newsletter', req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while subscribing.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
