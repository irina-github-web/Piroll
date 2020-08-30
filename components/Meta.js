import Head from "next/head";

export default function Meta(props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content="next, react, website" />
      <meta
        name="description"
        content="project ssr from psd with react + next"
      />
      <link rel="shortcut icon" href={require("../images/logo.png")} />
      <title>{props.title}</title>
    </Head>
  );
}
