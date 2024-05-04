// pages/api/example.js

export default async function handler(req: any, res: any) {
    try {
      const response = await fetch('https://api.ongraphy.com/public/v1/products?mid=nivedita5567&key=104c09da-c978-4dda-a6d3-11c7d128e5f9');
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  }
  