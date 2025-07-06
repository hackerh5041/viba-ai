export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { scriptText } = req.body;

  if (!scriptText) {
    return res.status(400).json({ message: 'No script provided' });
  }

  try {
    // For now, simulate video generation
    const videoURL = 'https://www.w3schools.com/html/mov_bbb.mp4'; // Replace with actual result

    res.status(200).json({ videoURL });
  } catch (err) {
    res.status(500).json({ message: 'Error generating video' });
  }
}
