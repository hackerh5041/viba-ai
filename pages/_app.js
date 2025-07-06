import Navbar from '../components/Navbar';
import '../styles/globals.css'; // if you have global CSS

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
