import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.gstatic.com/" as="script" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com/" as="script" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
