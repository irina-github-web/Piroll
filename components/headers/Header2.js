import Link from "next/link";

export default function Header2(props) {
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
        <nav className="header__nav">
          <Link href="/">
            <a className="active">Home</a>
          </Link>
          <Link href="about">
            <a>About</a>
          </Link>
          <Link href="contacts">
            <a>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
