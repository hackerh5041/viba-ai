export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { scriptText } = req.body;

  if (!scriptText || scriptText.trim().length === 0) {
    return res.status(400).json({ message: 'Script text is required' });
  }

  // This is a fake delay + dummy video URL for now
  // You’ll replace this with real AI video API when we’re ready
  await new Promise((resolve) => setTimeout(resolve, 3000));

  res.status(200).json({
    videoURL: 'https://www.w3schools.com/html/mov_bbb.mp4', // TEMP placeholder video
  });
}
