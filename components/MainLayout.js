import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "Piroll" }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="next, react, website" />
        <meta
          name="description"
          content="project ssr from psd with react + next"
        />
        <title>{title}</title>
      </Head>

      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contacts">
          <a>Contacts</a>
        </Link>
      </nav>

      <main>{children}</main>
    </>
  );
}
