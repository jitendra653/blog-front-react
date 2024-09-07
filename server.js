const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('*', (req, res) => {
    // Import your main React component
    const App = require('./src/App').default;

    // Render the component to a string
    const appString = ReactDOMServer.renderToString(<App />);

    // Read the HTML file
    const indexFile = path.resolve('./public/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        // Inject the rendered React app into the HTML and send it to the client
        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${appString}</div>`)
        );
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
