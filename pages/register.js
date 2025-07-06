import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("✅ Account created! You can now log in.");
    } catch (error) {
      alert("❌ Error: " + error.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Sign Up</button>
    </div>
  );
}
