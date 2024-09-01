import express, { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const app = express();

app.use(express.static('public'));

app.get('*', (req: Request, res: Response) => {
  const appHtml = ReactDOMServer.renderToString(<App/>
  );

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR with React and TypeScript</title>
    </head>
    <body>
        <div id="root">${appHtml}</div>
        <script src="/bundle.js"></script>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
