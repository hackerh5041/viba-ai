import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

export default function Generate() {
  const [user, setUser] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setVideoUrl("");

    try {
      // Simulate AI video generation (replace with real API later)
      const fakeUrl = `https://dummyvideo.com/ai-video-${Date.now()}.mp4`;
      setTimeout(() => {
        setVideoUrl(fakeUrl);
        setLoading(false);
      }, 3000); // fake 3 sec delay
    } catch (err) {
      console.error("Generation failed", err);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>AI Video Generator</h1>
      {user && <p>Welcome, {user.email}</p>}

      <textarea
        placeholder="Enter your video idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={5}
        cols={50}
      />
      <br />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Video"}
      </button>

      {videoUrl && (
        <div>
          <h3>Here’s your video:</h3>
          <video src={videoUrl} controls width="400" />
        </div>
      )}
    </div>
  );
}
