export default function Login() {
  return (
    <div style={{ padding: '3rem', textAlign: 'center' }}>
      <h1>Login to VibaAI</h1>
      <form>
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
