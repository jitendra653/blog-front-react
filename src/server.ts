import express from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import App from './App.tsx'; // Ensure this is the correct path to your React component

const app = express();

app.get('*', (req, res) => {
  let didError = false;

  const stream = renderToPipeableStream(<App />, {
    onShellReady() {
      // This gets called when the shell of the page is ready
      res.statusCode = didError ? 500 : 200;
      res.setHeader('Content-Type', 'text/html');
      stream.pipe(res);
    },
    onError(err: Error) {
      didError = true;
      console.error('Error during SSR:', err);
    },
  });

  // Abort stream if it's taking too long (optional)
  setTimeout(() => {
    stream.abort();
  }, 5000);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
