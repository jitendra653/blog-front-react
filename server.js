const express = require('express');
const path = require('path');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./src/App.tsx'); // Your React App component

const app = express();

// Serve static assets like JS and CSS
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
  const stream = ReactDOMServer.renderToPipeableStream(<App />, {
    onShellReady() {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');

      // Start streaming the HTML shell
      stream.pipe(res);
    },
    onError(err) {
      console.error(err);
      res.statusCode = 500;
      res.send('An error occurred');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
