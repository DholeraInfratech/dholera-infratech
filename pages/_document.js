import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        {/* <link rel="icon" type="image/x-icon" href="https://dholerainfratech.com/images/favicon.ico" /> */}
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
