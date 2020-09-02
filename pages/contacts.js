import { MainLayout } from "../components/MainLayout";
import Form from "../components/Form";

export default function Contacts() {
  return (
    <MainLayout title={"Contacts"}>
      <section id="contacts" className="contacts">
        <div className="wrapper">
          <div className="contacts__col1 col-md-4">
            <h2 className="title about__title">Contact info:</h2>
            <p className="about__text">
              To give give beginning divide, cattle. Give moving won't, there
              the abundantly she'd she'd brought air upon. Light hath subdue.
              Life days creature upon first heaven gathering dry.
            </p>
            <ul className="contacts__list">
              <li className="contacts__item">
                <strong>Adress:</strong>10111 Santa Monica Boulevard, LA
              </li>
              <li className="contacts__item">
                <strong>Phone:</strong>
                <a href="tel:+44987065908">+44 987 065 908</a>
              </li>
              <li className="contacts__item">
                <strong>Email:</strong>
                <a href="mailto:info@Example.com">info@Example.com</a>
              </li>
              <li className="contacts__item">
                <strong>Fax:</strong>+44 987 065 909
              </li>
            </ul>
          </div>
          <div className="contacts__col2 col-md-7 offset-1">
            <Form />
          </div>
        </div>
        <div className="contacts__map">
          <img src={require("../images/map-image.jpg")} />
        </div>
      </section>
    </MainLayout>
  );
}
