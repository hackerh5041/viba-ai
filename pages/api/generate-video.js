export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt || prompt.trim() === '') {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const fakeResponse = {
      title: 'How to Build Discipline as a Man',
      script: `Discipline isn't motivation. It's doing what must be done, even when you don’t feel like it. True strength is built in silence. While others sleep, you train. While they party, you grind. While they doubt, you build.`
    };

    res.status(200).json({ success: true, data: fakeResponse });
  } catch (error) {
    console.error('Error generating video script:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
