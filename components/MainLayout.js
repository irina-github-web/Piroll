import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

export function MainLayout({ children, title = "Piroll" }) {
  return (
    <>
      <Meta title={title} />

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
