import { MainLayout } from "../components/MainLayout";
import { Numbers } from "../components/Numbers";
import Link from "next/link";

export default function About() {
  return (
    <MainLayout title={"About"}>
      <section id="amelia" className="amelia">
        <div className="wrapper">
          <h1 className="amelia__title">Amelia Woods</h1>
          <p className="amelia__about">
            I am a Graphic & Web Designer based in New York, specializing in
            User Interface Design and Development.
          </p>
        </div>
      </section>

      <Numbers />

      <section id="aboutme" className="aboutme">
        <div className="wrapper">
          <div className="aboutme__img">
          <img src={require("../images/aboutme2.jpg")} />
          </div>
          <div className="aboutme__text">
            <h2 className="title about__title">About me</h2>
            <p className="about__text">
              Given let waters air sea had you'll, may seed abundantly fish.
              Were, you'll earth forth winged above brought. Own darkness
              they're him can't fourth sea place have.
            </p>
            <p className="about__text">
              So the above May stars cattle fruitful face shall. Tree it,
              winged. Every signs male firmament us. Morning him.
            </p>
            <img
              className="about__sign"
              src={require("../images/signature.png")}
            />
          </div>
        </div>
      </section>

      <section id="prbtn" className="prbtn">
        <div className="wrapper">
          <h2 className="title prform__title">Need a Project?</h2>
          <div className="about__text">
            Let us know what you're looking for in an agency. We'll take a look
            and see if this could be the start of something beautiful.
          </div>
          <Link href="contacts">
            <a className="welcome__link submit-btn">Let's talk</a>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
