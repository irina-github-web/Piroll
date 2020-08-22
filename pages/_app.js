import { Head } from "next/document";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import "../js/main.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
