export default function Footer() {
  return (
    <section id="footer" className="footer">
      <div className="wrapper">
        <div className="col-5 footer__col1">
          <div className="comp_name">Piroll Design, Inc.</div>
          <div className="copyright">
            © 2017 Piroll. All rights reserved.<br /> Designed by robirurk.
          </div>
        </div>
        <div className="col-7 footer__col2">
          <div className="conts">
            <ul className="conts__list">
              <li className="conts__item">
                <a href="mailto:hello@pirolltheme.com">hello@pirolltheme.com</a>
              </li>
              <li className="conts__item">
                <a href="tel:+44987065908">+44 987 065 908</a>
              </li>
            </ul>
          </div>
          <div className="menus">
            <ul className="menus__list">
              <li className="menus__item">
                <a href="#">Projects</a>
              </li>
              <li className="menus__item">
                <a href="#">About</a>
              </li>
              <li className="menus__item">
                <a href="#">Services</a>
              </li>
              <li className="menus__item">
                <a href="#">Carreer</a>
              </li>
              <li className="menus__item">
                <a href="#">News</a>
              </li>
              <li className="menus__item">
                <a href="#">Events</a>
              </li>
              <li className="menus__item">
                <a href="#">Contact</a>
              </li>
              <li className="menus__item">
                <a href="#">Legals</a>
              </li>
            </ul>
          </div>
          <div className="socials">
            <ul className="socials__list">
              <li className="socials__item"><a href="#">Facebook</a></li>
              <li className="socials__item"><a href="#">Twitter</a></li>
              <li className="socials__item"><a href="#">Instagram</a></li>
              <li className="socials__item"><a href="#">Dribbble</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
