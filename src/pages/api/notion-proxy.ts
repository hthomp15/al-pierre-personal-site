// api/notion-proxy.js

import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

 async function notionProxy (req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  // Define Notion API endpoint based on query parameters or path
  const notionApiEndpoint = `https://api.notion.com${query.endpoint}`;

  if (method === 'GET') {
    try {
      const response = await fetch(notionApiEndpoint, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer secret_H7GGJvj9LEhIz8E9geKHZCHKyQwft2Rq7WKi8esEJlY`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        res.status(response.status).send('Error');
        return;
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error: any) { 
      res.status(500).send(error.message as string); 
    }
  } else if (method === 'POST') {
    // Handle POST requests
    try {
      const body = JSON.stringify(req.body);
      const response = await fetch(notionApiEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer secret_H7GGJvj9LEhIz8E9geKHZCHKyQwft2Rq7WKi8esEJlY',
          'Content-Type': 'application/json',
        },
        body,
      });

      if (!response.ok) {
        res.status(response.status).send('Error');
        return;
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).send(error.message as string);
    }
  } else {
    res.status(405).send('Method not allowed');
  }

};

export default notionProxy;
