import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html  lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE and Edge
        "&::-webkit-scrollbar": {
          display: "none", // Chrome and Safari
        },
        WebkitOverflowScrolling: "touch", 
      }} >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
