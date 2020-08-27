import Link from "next/link";

export default function Header(props) {
  // var currentLocation = props.pathname;

  // if (currentLocation === "/") {
  //   const Header = {
  //     position: "absolute",
  //   };
  // } else {
  //   const Header = {
  //     position: "relative",
  //   };
  // }

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__logo">
          <Link href="/">
            <a>
              <img src={require("../images/logo.png")} />
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
          <Link href="#works">
            <a>Work</a>
          </Link>
          <Link href="#process">
            <a>Process</a>
          </Link>
          <Link href="#wtypes">
            <a>Services</a>
          </Link>
          <Link href="#revslider">
            <a>Testimonials</a>
          </Link>
          <Link href="contacts">
            <a>Contact</a>
          </Link>
        </nav>

        {/* <nav className="navbar header__nav">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav justify-content-end">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link">Work</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link">Process</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link">Services</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link">Testimonials</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="contacts">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}
      </div>
    </header>
  );
}
