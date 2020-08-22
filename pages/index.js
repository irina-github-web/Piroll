import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout title={"Home"}>
      <section id="welcome">
        <div className="wrapper">
          <div className="welcome__content">
            <h1 className="welcome__title">We design end develop</h1>
            <p className="welcome__text">
              We are a new design studio based in USA. We have over 20 years of
              combined experience, and know a thing or two about designing
              websites and mobile apps.
            </p>
            <Link href="contacts">
              <a className="welcome__link">Contact us</a>
            </Link>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrapper">
          <h2 className="about__title title">About us</h2>
          <p className="about__text">
            Divide have don't man wherein air fourth. Own itself make have night
            won't make. A you under Seed appear which good give. Own give air
            without fowl moveth dry first heaven fruit, dominion she'd won't
            very all.
          </p>
          <img
            className="about__sign"
            src={require("../images/signature.png")}
          />
        </div>
      </section>

      <section id="skills">
        <div className="wrapper">
          <h2 className="skills__title title">Professional Skills</h2>
          <ul className="sills__list">
            <li className="skills__item">One</li>
            <li className="skills__item">Two</li>
            <li className="skills__item">Three</li>
          </ul>
        </div>
      </section>

      <section id="number">
        <div className="wrapper">
          <ul className="numbers__list">
            <li className="numbers__item">
              <img
                className="numbers__icon"
                src={require("../images/logo.png")}
              />
              <div className="numbers__content">
                <div className="numbers__num">548</div>
                <div className="numbers__text">Projects completed</div>
              </div>
            </li>
            <li className="numbers__item">
              <img
                className="numbers__icon"
                src={require("../images/logo.png")}
              />
              <div className="numbers__content">
                <div className="numbers__num">548</div>
                <div className="numbers__text">Projects completed</div>
              </div>
            </li>
            <li className="numbers__item">
              <img
                className="numbers__icon"
                src={require("../images/logo.png")}
              />
              <div className="numbers__content">
                <div className="numbers__num">548</div>
                <div className="numbers__text">Projects completed</div>
              </div>
            </li>
            <li className="numbers__item">
              <img
                className="numbers__icon"
                src={require("../images/logo.png")}
              />
              <div className="numbers__content">
                <div className="numbers__num">548</div>
                <div className="numbers__text">Projects completed</div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="works">
        <div className="works__list">
          <div className="works__item">
            <img src={require("../images/work-1.jpg")} />
          </div>
          <div className="works__item">
            <img src={require("../images/work-2.jpg")} />
          </div>
          <div className="works__item">
            <img src={require("../images/work-3.jpg")} />
          </div>
          <div className="works__item">
            <img src={require("../images/work-4.jpg")} />
          </div>
          <div className="works__item">
            <img src={require("../images/work-5.jpg")} />
          </div>
          <div className="works__item">
            <img src={require("../images/work-8.jpg")} />
          </div>
          <div className="works__item">
            <img src={require("../images/work-7.jpg")} />
          </div>
          <div className="works__item">
            <img src={require("../images/work-8.jpg")} />
          </div>
        </div>
        <div className="works__btn">
          <a href="#">Load more work</a>
        </div>
      </section>
      
    </MainLayout>
  );
}
