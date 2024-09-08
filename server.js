
require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  });
  
// server.js
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const path = require('path');

// Import the main App component
const App = require('./src/App.tsx');

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const appComponent = ReactDOMServer.renderToString(React.createElement(App));

  // Read the HTML template
  const indexFile = path.resolve('./public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Inject the server-rendered app component into the HTML
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appComponent}</div>`)
    );
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
