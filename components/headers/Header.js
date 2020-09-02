import Link from "next/link";
import { useEffect } from 'react';

export default function Header(props) {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "./ActiveItem.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
 
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__logo">
          <Link href="/">
            <a>
              <img src={require("../../images/logo.png")} />
            </a>
          </Link>
        </div>
        <nav className="navigation header__nav">
          <Link href="/">
            <a className="active">Home</a>
          </Link>
          <Link href="about">
            <a>About</a>
          </Link>
          <Link href="/#works">
            <a>Work</a>
          </Link>
          <Link href="/#process">
            <a>Process</a>
          </Link>
          <Link href="/#wtypes">
            <a>Services</a>
          </Link>
          <Link href="/#revslider">
            <a>Testimonials</a>
          </Link>
          <Link href="contacts">
            <a>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
