import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import { Skills } from "../components/Skills";

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
            <Skills />
        </div>
      </section>

      <section id="number">
        <div className="wrapper">
          <ul className="numbers__list">
            <li className="numbers__item">
              <svg className="numbers__icon" viewBox="0 0 32 32">
                <path d="M19.732 7.203v-2.666h-7.464v2.666h-9.063v20.259h25.59v-20.259h-9.063zM13.334 5.604h5.331v1.599h-5.331v-1.599zM12.268 8.27h15.461v8.53h-7.997v-2.133h-7.464v2.133h-7.997v-8.53h7.997zM18.666 15.733v3.199h-5.331v-3.199h5.331zM4.271 26.396v-8.53h7.997v2.133h7.464v-2.133h7.997v8.53h-23.457z"></path>
              </svg>
              <div className="numbers__content">
                <div className="numbers__num">548</div>
                <div className="numbers__text">Projects completed</div>
              </div>
            </li>
            <li className="numbers__item">
              <svg className="numbers__icon" viewBox="0 0 32 32">
                <path d="M16 3.205c-7.066 0-12.795 5.729-12.795 12.795s5.729 12.795 12.795 12.795 12.795-5.729 12.795-12.795c0-7.066-5.729-12.795-12.795-12.795zM16 27.729c-6.467 0-11.729-5.261-11.729-11.729s5.261-11.729 11.729-11.729 11.729 5.261 11.729 11.729c0 6.467-5.261 11.729-11.729 11.729z"></path>
                <path d="M16 17.066h-6.398v1.066h7.464v-10.619h-1.066z"></path>
              </svg>
              <div className="numbers__content">
                <div className="numbers__num">1465</div>
                <div className="numbers__text">Working hours</div>
              </div>
            </li>
            <li className="numbers__item">
              <svg className="numbers__icon" viewBox="0 0 32 32">
                <path d="M19.38 12.803l-3.38-10.398-3.381 10.398h-11.013l8.925 6.397-3.427 10.395 8.896-6.448 8.895 6.448-3.426-10.395 8.925-6.397h-11.014zM20.457 19.534l2.394 7.261-6.85-4.965-6.851 4.965 2.64-8.005-0.637-0.456-6.228-4.464h8.471l2.606-8.016 2.605 8.016h8.471l-6.864 4.92 0.245 0.744z"></path>
              </svg>
              <div className="numbers__content">
                <div className="numbers__num">612</div>
                <div className="numbers__text">Positive feedbacks</div>
              </div>
            </li>
            <li className="numbers__item">
              <svg className="numbers__icon" viewBox="0 0 32 32">
                <path d="M21.886 5.115c3.521 0 6.376 2.855 6.376 6.376 0 1.809-0.754 3.439-1.964 4.6l-10.297 10.349-10.484-10.536c-1.1-1.146-1.778-2.699-1.778-4.413 0-3.522 2.855-6.376 6.376-6.376 2.652 0 4.925 1.62 5.886 3.924 0.961-2.304 3.234-3.924 5.886-3.924zM21.886 4.049c-2.345 0-4.499 1.089-5.886 2.884-1.386-1.795-3.54-2.884-5.886-2.884-4.104 0-7.442 3.339-7.442 7.442 0 1.928 0.737 3.758 2.075 5.152l11.253 11.309 11.053-11.108c1.46-1.402 2.275-3.308 2.275-5.352 0-4.104-3.339-7.442-7.442-7.442v0z"></path>
              </svg>
              <div className="numbers__content">
                <div className="numbers__num">735</div>
                <div className="numbers__text">Happy clients</div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="works">
        <div className="works__list">
          <div className="works__item">
            <a href="#">
              <img src={require("../images/work-1.jpg")} className="thumb" />
            </a>
          </div>
          <div className="works__item">
            <img className="thumb" src={require("../images/work-2.jpg")} />
          </div>
          <div className="works__item">
            <img className="thumb" src={require("../images/work-3.jpg")} />
          </div>
          <div className="works__item">
            <img className="thumb" src={require("../images/work-4.jpg")} />
          </div>
          <div className="works__item">
            <img className="thumb" src={require("../images/work-5.jpg")} />
          </div>
          <div className="works__item">
            <img className="thumb" src={require("../images/work-8.jpg")} />
          </div>
          <div className="works__item">
            <img className="thumb" src={require("../images/work-7.jpg")} />
          </div>
          <div className="works__item">
            <img className="thumb" src={require("../images/work-8.jpg")} />
          </div>
        </div>
        <div className="works__btn">
          <a href="#">Load more work</a>
        </div>
      </section>
    </MainLayout>
  );
}
