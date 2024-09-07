// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// const serverless = require('serverless-http');

// const app = express();
// const port = 5000;

// app.use(cors()); // Enable CORS for cross-origin requests
// app.use(express.json()); // Middleware to parse JSON request bodies

// app.get('/api/post', async (req, res) => {
//   try {
//     const response = await axios.get('https://blog-admin-next.vercel.app/api/post');
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching data from external API:', error);
//     res.status(500).json({ error: 'Failed to fetch data' });
//   }
// });

// app.post('/api/contact', async (req, res) => {
//   try {
//     const response = await axios.post('https://blog-admin-next.vercel.app/api/contact', req.body, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred while sending the message.' });
//   }
// });

// app.post('/api/newsletter', async (req, res) => {
//   try {
//     const response = await axios.post('https://blog-admin-next.vercel.app/api/newsletter', req.body, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred while subscribing.' });
//   }
// });

// module.exports = app;
// module.exports.handler = serverless(app);
