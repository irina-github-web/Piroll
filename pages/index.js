import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import { Skills } from "../components/Skills";
import MySlider from "../components/slider/MySlider";
import Form from "../components/Form";
import { Numbers } from "../components/Numbers";

export default function Index() {
  return (
    <MainLayout title={"Home"}>
      <section id="welcome" className="welcome">
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

      <section id="about" className="about">
        <div className="wrapper">
          <h2 className="title about__title">About us</h2>
          <p className="about__text">
            npm uninstall Divide have don't man wherein air fourth. Own itself
            make have night won't make. A you under Seed appear which good give.
            Own give air without fowl moveth dry first heaven fruit, dominion
            she'd won't very all.
          </p>
          <img
            className="about__sign"
            src={require("../images/signature.png")}
          />
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="wrapper">
          <h2 className="title skills__title">Professional Skills</h2>
          <Skills />
        </div>
      </section>

      <Numbers />

      <section id="works" className="works">
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
        <a className="works__btn" href="#">
          Load more work
        </a>
      </section>

      <section id="process" className="process">
        <div className="wrapper">
          <h2 className="title process__title">Our Work Process</h2>
          <div className="about__text">
            Was years it seasons was there form he in in them together over
            that, third sixth gathered female creeping bearing behold years.
          </div>
          <div className="process__video">
            <a href="#">
              <img
                className="process__img"
                src={require("../images/video-bg.jpg")}
              />
              <span className="video-btn">►</span>
            </a>
          </div>
        </div>
      </section>

      <section id="wtypes" className="wtypes">
        <div className="wrapper">
          <ul className="wtypes__list">
            <li className="wtypes__item">
              <div className="wtypes__icon">
                <svg viewBox="0 0 28 32">
                  <path d="M27.467 10.667l-6.293-7.467h-14.4l-6.293 7.467-0.48 0.533 0.427 0.533 13.547 17.067 13.973-17.6-0.48-0.533zM26.080 10.667h-10.72l5.333-6.347 5.387 6.347zM13.92 10.667l-5.547-6.4h10.987l-5.44 6.4zM7.147 4.427l5.387 6.24h-10.667l5.28-6.24zM13.44 11.733v14.667l-11.68-14.667h11.68zM14.507 26.4v-14.667h11.627l-11.627 14.667z"></path>
                </svg>
              </div>
              <div className="wtypes__title">UI / UX Design</div>
              <div className="wtypes__text">
                Be set fourth land god darkness make it wherein own
              </div>
            </li>
            <li className="wtypes__item">
              <div className="wtypes__icon">
                <svg viewBox="0 0 27 32">
                  <path d="M22.453 7.573l2.987-2.987v2.453h1.067v-4.267h-4.267v1.067h2.453l-2.987 2.987c-2.72-2.56-6.293-4.107-10.293-4.107-4.373 0-8.533 1.92-11.413 5.173l0.8 0.693c0.107-0.107 0.213-0.213 0.32-0.32l9.547 9.6-3.573 3.573h-2.667l-3.733 3.733h3.413v3.413l3.733-3.733v-2.667l3.573-3.573 9.547 9.547c-0.107 0.107-0.213 0.213-0.32 0.32l0.693 0.8c3.307-2.88 5.173-7.040 5.173-11.413 0.053-4-1.493-7.627-4.053-10.293zM6.773 24.373l-1.6 1.6v-1.92h-1.867l1.6-1.6h1.92v1.92zM1.867 7.52c2.56-2.4 5.973-3.733 9.547-3.733 3.68 0 7.040 1.44 9.547 3.733l-9.547 9.547-9.547-9.547zM21.707 8.32c2.347 2.507 3.733 5.867 3.733 9.547 0 3.573-1.333 6.933-3.733 9.547l-9.547-9.547 9.547-9.547z"></path>
                </svg>
              </div>
              <div className="wtypes__title">Web Development</div>
              <div className="wtypes__text">
                A she'd them bring void moving third she'd kind fill
              </div>
            </li>
            <li className="wtypes__item">
              <div className="wtypes__icon">
                <svg viewBox="0 0 32 32">
                  <path d="M23.086 1.606h-14.173c-0.797 0-1.444 0.647-1.444 1.444v25.901c0 0.798 0.647 1.444 1.444 1.444h14.173c0.797 0 1.444-0.646 1.444-1.444v-25.901c0-0.797-0.647-1.444-1.444-1.444zM23.464 28.951c0 0.208-0.169 0.377-0.377 0.377h-14.173c-0.208 0-0.377-0.169-0.377-0.377v-4.95h14.928v4.95zM23.464 22.934h-14.928v-17.042h14.928v17.042zM23.464 4.826h-14.928v-1.776c0-0.208 0.169-0.378 0.377-0.378h14.173c0.208 0 0.377 0.17 0.377 0.378v1.776z"></path>
                  <path d="M14.401 26.129h3.199v1.066h-3.199v-1.066z"></path>
                </svg>
              </div>
              <div className="wtypes__title">APP / Mobile</div>
              <div className="wtypes__text">
                Dominion man second spirit he, earth they're creeping
              </div>
            </li>
            <li className="wtypes__item">
              <div className="wtypes__icon">
                <svg viewBox="0 0 29 32">
                  <path d="M21.76 12.725c-2.003 0-4.095 1.81-6.549 2.067v-1.046c0.014-2.569 1.939-5.217 5.156-5.217h0.61c2.96 0 6.003-2.343 6.328-6.294h-1.050c-0.314 3.296-2.831 5.245-5.278 5.245h-0.61c-3.806 0-6.169 3.221-6.203 6.229h-0.002v0.040c0 0.008-0.001 0.017-0.001 0.026h0.001v1.018c-2.454-0.257-4.546-2.067-6.548-2.067-2.156 0-7.614 4.277-7.614 12.66 0 4.245 2.865 4.379 3.23 4.379 0.025 0 0.038 0 0.038 0 1.779 0 3.422-0.855 5.475-2.909s2.874-2.592 4.362-2.592c0.593 0 1.306 0 1.54 0 0.049 0 0.085 0 0.085 0 0.233 0 0.947 0 1.54 0 1.489 0 2.309 0.539 4.362 2.592s3.695 2.909 5.475 2.909c0 0 0.013 0 0.038 0 0.364 0 3.229-0.134 3.229-4.379 0-8.383-5.457-12.66-7.613-12.66zM26.155 28.717l-0.025-0.001h-0.025c-1.494 0-2.909-0.778-4.733-2.601-2.015-2.015-3.107-2.899-5.104-2.899h-3.164c-1.997 0-3.089 0.884-5.104 2.899-1.824 1.823-3.239 2.601-4.733 2.601l0.002-0.003-0.040 0.003c-0.512 0-2.181-0.24-2.181-3.33 0-8.010 5.217-11.611 6.565-11.611 0.792 0 1.731 0.422 2.726 0.869 1.269 0.57 2.707 1.216 4.356 1.229 1.631-0.013 3.069-0.66 4.339-1.229 0.995-0.447 1.934-0.869 2.726-0.869 1.346 0 6.564 3.601 6.564 11.611 0 3.091-1.669 3.33-2.169 3.331z"></path>
                  <path d="M8.396 16.921h-1.049v2.098h-2.098v1.049h2.098v2.098h1.049v-2.098h2.098v-1.049h-2.098z"></path>
                  <path d="M19.407 17.967c-0.869 0-1.574 0.704-1.574 1.574 0 0.869 0.705 1.574 1.574 1.574s1.573-0.705 1.573-1.574c0-0.87-0.704-1.574-1.573-1.574zM19.407 20.065c-0.289 0-0.524-0.236-0.524-0.524 0-0.29 0.236-0.525 0.524-0.525s0.524 0.235 0.524 0.525c0 0.289-0.235 0.524-0.524 0.524z"></path>
                  <path d="M23.603 19.016c-0.869 0-1.574 0.704-1.574 1.574s0.705 1.574 1.574 1.574c0.87 0 1.573-0.705 1.573-1.574 0-0.87-0.704-1.574-1.573-1.574zM23.603 21.114c-0.289 0-0.525-0.236-0.525-0.525s0.236-0.524 0.525-0.524c0.29 0 0.524 0.235 0.524 0.524s-0.234 0.525-0.524 0.525z"></path>
                </svg>
              </div>
              <div className="wtypes__title">Game Design</div>
              <div className="wtypes__text">
                Morning his saying moveth it multiply appear life be
              </div>
            </li>
            <li className="wtypes__item">
              <div className="wtypes__icon">
                <svg viewBox="0 0 32 32">
                  <path d="M9.123 30.464l-1.33-6.268-6.318-1.397 1.291-2.475 5.785-0.316c0.297-0.386 0.96-1.234 1.374-1.648l5.271-5.271-10.989-5.388 2.782-2.782 13.932 2.444 4.933-4.933c0.585-0.585 1.496-0.894 2.634-0.894 0.776 0 1.395 0.143 1.421 0.149l0.3 0.070 0.089 0.295c0.469 1.55 0.187 3.298-0.67 4.155l-4.956 4.956 2.434 13.875-2.782 2.782-5.367-10.945-4.923 4.924c-0.518 0.517-1.623 1.536-2.033 1.912l-0.431 5.425-2.449 1.329zM3.065 22.059l5.63 1.244 1.176 5.544 0.685-0.372 0.418-5.268 0.155-0.142c0.016-0.014 1.542-1.409 2.153-2.020l5.978-5.979 5.367 10.945 1.334-1.335-2.434-13.876 5.349-5.348c0.464-0.464 0.745-1.598 0.484-2.783-0.216-0.032-0.526-0.066-0.87-0.066-0.593 0-1.399 0.101-1.881 0.582l-5.325 5.325-13.933-2.444-1.335 1.334 10.989 5.388-6.326 6.326c-0.483 0.482-1.418 1.722-1.428 1.734l-0.149 0.198-5.672 0.31-0.366 0.702z"></path>
                </svg>
              </div>
              <div className="wtypes__title">SEO / Marketing</div>
              <div className="wtypes__text">
                Give won't after land fill creeping meat you, may
              </div>
            </li>
            <li className="wtypes__item">
              <div className="wtypes__icon">
                <svg viewBox="0 0 32 32">
                  <path d="M19.38 12.803l-3.38-10.398-3.381 10.398h-11.013l8.925 6.397-3.427 10.395 8.896-6.448 8.895 6.448-3.426-10.395 8.925-6.397h-11.014zM20.457 19.534l2.394 7.261-6.85-4.965-6.851 4.965 2.64-8.005-0.637-0.456-6.228-4.464h8.471l2.606-8.016 2.605 8.016h8.471l-6.864 4.92 0.245 0.744z"></path>
                </svg>
              </div>
              <div className="wtypes__title">Photography</div>
              <div className="wtypes__text">
                Creepeth one seas cattle grass give moving saw give
              </div>
            </li>
            <li className="wtypes__item">
              <div className="wtypes__icon">
                <svg viewBox="0 0 26 32">
                  <path d="M-0.007 28.236l13.916-13.916 0.754 0.754-13.916 13.916-0.754-0.754z"></path>
                  <path d="M9.973 10.453h4.267v1.067h-4.267v-1.067z"></path>
                  <path d="M21.707 10.453h4.267v1.067h-4.267v-1.067z"></path>
                  <path d="M17.44 14.72h1.067v4.267h-1.067v-4.267z"></path>
                  <path d="M17.44 2.987h1.067v4.267h-1.067v-4.267z"></path>
                  <path d="M23.991 5.717l-3.017 3.017-0.754-0.754 3.017-3.017 0.754 0.754z"></path>
                  <path d="M23.246 17.042l-3.017-3.017 0.754-0.754 3.017 3.017-0.754 0.754z"></path>
                  <path d="M14.986 8.741l-3.017-3.017 0.754-0.754 3.017 3.017-0.754 0.754z"></path>
                </svg>
              </div>
              <div className="wtypes__title">Graphic Design</div>
              <div className="wtypes__text">
                Open, great whales air rule for, fourth life whales
              </div>
            </li>
            <li className="wtypes__item">
              <div className="wtypes__icon">
                <svg viewBox="0 0 28 32">
                  <path d="M22.347 14.827v0l-10.4-10.453-0.213 0.16v-0.267c0-1.76-1.44-3.2-3.2-3.2s-3.2 1.44-3.2 3.2v6.667l-4.427 4.427c-1.227 1.227-1.227 3.2 0 4.427l6.027 6.027c0.587 0.64 1.44 0.907 2.24 0.907s1.6-0.32 2.24-0.907l7.627-7.68h6.56l-3.253-3.307zM6.4 4.267c0-1.173 0.96-2.133 2.133-2.133s2.133 0.96 2.133 2.133v1.333l-4.267 4.267v-5.6zM18.613 17.067l-8 8c-0.373 0.373-0.907 0.587-1.493 0.587-0.533 0-1.067-0.213-1.44-0.587l-6.027-6.027c-0.8-0.8-0.8-2.133 0-2.933l9.013-8.96v6.72h1.067v-7.787l0.16-0.16 11.147 11.147h-4.427z"></path>
                  <path d="M28.213 26.987c-0.32-2.88-3.413-6.72-3.413-6.72s-3.147 3.893-3.413 6.773c0 0.16 0 0.267 0 0.427 0 1.92 1.547 3.467 3.467 3.467s3.467-1.547 3.467-3.467c-0.053-0.16-0.053-0.32-0.107-0.48zM24.8 29.867c-1.333 0-2.4-1.067-2.4-2.4 0-0.107 0-0.16 0-0.267v0 0c0.16-1.6 1.387-3.68 2.347-5.12 0.96 1.387 2.187 3.52 2.4 5.067 0 0.107 0 0.213 0 0.32 0.053 1.333-1.013 2.4-2.347 2.4z"></path>
                </svg>
              </div>
              <div className="wtypes__title">Illustration</div>
              <div className="wtypes__text">
                Whales likeness hath, man kind for them air two won't
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="revslider" className="revslider">
        <div className="wrapper">
          <MySlider />
        </div>
      </section>

      <section id="clients" className="clients">
        <div className="wrapper">
          <ul className="clients__list">
            <li className="clients__item">
              <img
                className="clients__logo"
                src={require("../images/client_logo1.png")}
              />
            </li>
            <li className="clients__item">
              <img
                className="clients__logo"
                src={require("../images/client_logo2.png")}
              />
            </li>
            <li className="clients__item">
              <img
                className="clients__logo"
                src={require("../images/client_logo3.png")}
              />
            </li>
            <li className="clients__item">
              <img
                className="clients__logo"
                src={require("../images/client_logo4.png")}
              />
            </li>
            <li className="clients__item">
              <img
                className="clients__logo"
                src={require("../images/client_logo5.png")}
              />
            </li>
          </ul>
        </div>
      </section>

      <section id="prform" className="prform">
        <div className="wrapper">
          <h2 className="title prform__title">Need a Project?</h2>
          <div className="about__text">
            Let us know what you're looking for in an agency. We'll take a look
            and see if this could be the start of something beautiful.
          </div>
          <Form />
        </div>
      </section>
    </MainLayout>
  );
}
