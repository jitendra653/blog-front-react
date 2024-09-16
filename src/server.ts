// import express from 'express';
// import React from 'react';
// import { renderToPipeableStream } from 'react-dom/server';
// import App from './App';

// const app = express();
// const PORT = 3000;

// app.use(express.static('dist'));

// app.get('*', (req, res) => {
//   const { pipe } = renderToPipeableStream(<App />, {
//     onShellReady() {
//       res.setHeader('Content-Type', 'text/html');
//       res.write(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <title>React 18 SSR</title>
//         </head>
//         <body>
//           <div id="root">`);
//       pipe(res);
//     },
//     onShellError(error) {
//       console.error(error);
//       res.status(500).send('<h1>Error rendering page</h1>');
//     },
//     onAllReady() {
//       res.write(`</div><script src="/client.js"></script></body></html>`);
//       res.end();
//     },
//     onError(error) {
//       console.error(error);
//       res.status(500).send('<h1>Error rendering page</h1>');
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
